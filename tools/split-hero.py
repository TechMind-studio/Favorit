#!/usr/bin/env python3
"""Разрезать hero-pair.png (мотоцикл + машина на одном снимке, фон уже вырезан
cutout-hero.py) на два отдельных файла — moto-solo.png и car-solo.png.

Зачем: в Hero.tsx ширина мотоцикла и машины задаётся независимо (машина крупнее),
а один общий файл масштабируется только целиком. Границы найдены по связным
компонентам альфа-канала — фигуры на фото не соприкасаются, поэтому это просто
две отдельные непрозрачные области.

Если пересобираешь hero-pair.png заново — координаты heroLights в Hero.tsx завязаны
на РАЗМЕР И НАЧАЛО КООРДИНАТ каждого обрезанного файла, а не на исходный hero-pair.
Изменится обрезка — перекликай фары в tools/lights-picker.html заново.
"""
import cv2
import numpy as np
from PIL import Image

CARS = "/home/zolbrain/Рабочий стол/projects/Фаворит/site/public/images/cars/"
SRC = CARS + "hero-pair.png"

im = Image.open(SRC).convert("RGBA")
alpha = np.array(im)[:, :, 3]

mask = (alpha > 10).astype(np.uint8)
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
n, lab, stats, _ = cv2.connectedComponentsWithStats(mask, 8)
comps = sorted(range(1, n), key=lambda i: stats[i, cv2.CC_STAT_LEFT])  # слева направо
if len(comps) != 2:
    raise SystemExit(f"ожидались 2 отдельные фигуры (мотоцикл, машина), нашлось {len(comps)}")

for name, i in zip(("moto-solo.png", "car-solo.png"), comps):
    x, y, w, h, _ = stats[i]
    box = (x, y, x + w, y + h)  # без отступа — так же, как обрезаны текущие файлы
    crop = im.crop(box)
    crop.save(CARS + name)
    print(f"{name}: box={box} size={crop.size}")
