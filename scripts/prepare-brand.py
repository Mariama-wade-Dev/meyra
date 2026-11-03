"""Génère les déclinaisons du logo MËYRA (fond transparent) à partir des fichiers fournis.
Les formes ne sont pas modifiées : seul le fond ivoire est retiré (extraction d'alpha)."""
import numpy as np
from PIL import Image
PRUNE=np.array([0x51,0x2B,0x3A],float); TERRA=np.array([0xC4,0x77,0x5A],float); IVORY=np.array([0xF7,0xF2,0xEA],float)

def extract(path):
    im=np.asarray(Image.open(path).convert('RGB'),float)
    bg=np.median(im[:20,:20].reshape(-1,3),axis=0)
    v=im-bg
    vp=PRUNE-bg; vt=TERRA-bg
    dp=np.linalg.norm(vp); dt=np.linalg.norm(vt)
    proj_p=(v@vp)/dp; proj_t=(v@vt)/dt
    cos_p=proj_p/(np.linalg.norm(v,axis=2)+1e-6); cos_t=proj_t/(np.linalg.norm(v,axis=2)+1e-6)
    use_p=cos_p>=cos_t
    a=np.where(use_p,proj_p/dp,proj_t/dt)
    a=np.clip(a*1.04,0,1); a[a<0.04]=0
    return a,use_p

def render(a,use_p,prune_color,terra_color):
    h,w=a.shape
    rgb=np.where(use_p[...,None],prune_color,terra_color)
    out=np.dstack([rgb,a*255]).astype(np.uint8)
    img=Image.fromarray(out,'RGBA')
    return img

def crop(img,pad=24):
    bbox=img.getchannel('A').point(lambda x:255 if x>10 else 0).getbbox()
    l,t,r,b=bbox
    return img.crop((max(l-pad,0),max(t-pad,0),min(r+pad,img.width),min(b+pad,img.height)))

for src,name in [('/mnt/user-data/uploads/logo.png','logo'),('/mnt/user-data/uploads/icone.png','symbol')]:
    a,up=extract(src)
    for variant,(pc,tc) in {'prune':(PRUNE,TERRA),'ivory':(IVORY,TERRA)}.items():
        img=crop(render(a,up,pc,tc))
        scale=900/max(img.size)
        img=img.resize((round(img.width*scale),round(img.height*scale)),Image.LANCZOS)
        img.save(f'public/images/brand/{name}-{variant}.png',optimize=True)
        print(name,variant,img.size)

# favicon + apple icon (symbole ivoire sur fond prune, coins arrondis)
a,up=extract('/mnt/user-data/uploads/icone.png')
sym=crop(render(a,up,IVORY,TERRA),pad=10)
def tile(size,radius_ratio=0.22):
    from PIL import ImageDraw
    bgc=Image.new('RGBA',(size,size),(0,0,0,0))
    d=ImageDraw.Draw(bgc); d.rounded_rectangle([0,0,size-1,size-1],radius=int(size*radius_ratio),fill=(0x51,0x2B,0x3A,255))
    s=sym.copy(); s.thumbnail((int(size*0.68),int(size*0.68)),Image.LANCZOS)
    bgc.alpha_composite(s,((size-s.width)//2,(size-s.height)//2))
    return bgc
tile(512).save('public/icon-512.png'); tile(180).save('public/apple-touch-icon.png'); tile(32).save('public/favicon-32.png'); tile(192).save('public/icon-192.png')

# image Open Graph 1200x630
og=Image.new('RGBA',(1200,630),(0xF7,0xF2,0xEA,255))
lg=Image.open('public/images/brand/logo-prune.png'); lg.thumbnail((420,420),Image.LANCZOS)
og.alpha_composite(lg,(100,(630-lg.height)//2))
from PIL import ImageDraw,ImageFont
d=ImageDraw.Draw(og)
d.pieslice([720,-300,1500,480],90,180,fill=(0x51,0x2B,0x3A,255))
d.pieslice([900,330,1500,930],180,270,fill=(0xC4,0x77,0x5A,255))
og.convert('RGB').save('public/og-image.png',optimize=True)
print('ok')
