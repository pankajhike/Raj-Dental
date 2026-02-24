import os
import sys
from html.parser import HTMLParser

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []

    def handle_starttag(self, tag, attrs):
        if tag == "img":
            for name, value in attrs:
                if name == "src":
                    self.images.append(value)

def verify_images(html_file):
    print(f"Verifying images in {html_file}")
    if not os.path.exists(html_file):
        print(f"Error: {html_file} not found.", file=sys.stderr)
        return False

    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()

    parser = ImageParser()
    parser.feed(content)

    missing = []
    found = []

    for img_src in parser.images:
        # Convert web paths to OS paths if necessary (e.g. forward slash to backslash)
        os_path = img_src.replace('/', os.sep)
        
        # We assume img_src is relative to html_file's directory
        base_dir = os.path.dirname(html_file)
        full_path = os.path.join(base_dir, os_path) if base_dir else os_path

        if os.path.exists(full_path):
            found.append(img_src)
        else:
            missing.append(img_src)

    print(f"\nFound {len(found)} valid images.")
    if missing:
        print(f"\nWARNING: {len(missing)} missing images:")
        for m in missing:
            print(f"  - {m}")
        return False
    else:
        print("\nSUCCESS: All images are present on disk.")
        return True

if __name__ == "__main__":
    verify_images("index.html")
    # also checking other html files to be thorough 
    print("\n--- Checking other pages ---")
    for page in ["about.html", "gallery.html", "why-choose-us.html"]:
        if os.path.exists(page):
            verify_images(page)
