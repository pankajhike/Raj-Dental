import os

html_file = r"c:\Users\panka\Downloads\Clinic-1.0.0 - Copy\RPS FIgma Design\index.html"
with open(html_file, "r", encoding="utf-8") as f:
    html = f.read()

# Fix Star
html = html.replace('42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg" alt="Star"', '8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg" alt="Star"')

# Fix Phone
html = html.replace('8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Phone Icon"', '42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg" alt="Phone Icon"')
html = html.replace('8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Phone"', '42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg" alt="Phone"')

# Fix Arrow
html = html.replace('8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg" alt="Arrow Right"', '8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Arrow Right"')

with open(html_file, "w", encoding="utf-8") as f:
    f.write(html)
    
print("Fixed icons successfully.")
