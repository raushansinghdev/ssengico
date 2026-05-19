from PIL import Image, ImageDraw, ImageFont

# Load images
owner = Image.open("public/images/owner_original_backup.png").convert("RGBA")
logo = Image.open("public/images/logo.png").convert("RGBA")

# Remove black background from logo
logo_data = list(logo.getdata())
new_data = []
for pixel in logo_data:
    r, g, b, a = pixel
    if r < 45 and g < 45 and b < 45:
        new_data.append((r, g, b, 0))
    else:
        new_data.append(pixel)
logo.putdata(new_data)

# Resize logo
logo_size = 70
logo_resized = logo.resize((logo_size, logo_size), Image.LANCZOS)

# Position: around the pocket area — much lower, mid-chest
x_pos = 585
y_pos = 560

# Paste logo with transparency
owner.paste(logo_resized, (x_pos, y_pos), logo_resized)

# Add "SS Fabrication" text below the logo in orange
draw = ImageDraw.Draw(owner)
try:
    font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
except:
    font = ImageFont.load_default()

text = "SS Fabrication"
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_x = x_pos + (logo_size - text_width) // 2
text_y = y_pos + logo_size + 2

draw.text((text_x, text_y), text, fill=(255, 107, 0, 255), font=font)

# Save
owner_rgb = owner.convert("RGB")
owner_rgb.save("public/images/owner.png", "PNG", quality=95)
print("Done!")
