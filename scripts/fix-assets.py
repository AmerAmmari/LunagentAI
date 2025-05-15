import os
import re

# Adjust asset references in exported HTML for GitHub Pages
def rewrite_html(root_dir, repo_name):
    for subdir, _, files in os.walk(root_dir):
        for filename in files:
            if filename.endswith('.html'):
                file_path = os.path.join(subdir, filename)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Replace absolute basePath asset links with relative ones
                content = re.sub(
                    rf'href="/{repo_name}/_next',
                    'href="./_next',
                    content
                )
                content = re.sub(
                    rf'src="/{repo_name}/_next',
                    'src="./_next',
                    content
                )
                # Also fix intra-site navigation links
                content = re.sub(
                    rf'href="/{repo_name}/',
                    'href="./',
                    content
                )

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)

if __name__ == "__main__":
    # Change 'LunagentAI' to your actual repo name
    rewrite_html('out', 'LunagentAI')
    print("HTML asset references adjusted for GitHub Pages!")
