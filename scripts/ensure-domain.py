#!/usr/bin/env python3
import os

def main():
    out_dir = os.path.join(os.path.dirname(__file__), '..', 'out')
    # 1) Ensure .nojekyll exists
    nojekyll = os.path.join(out_dir, '.nojekyll')
    try:
        # touch the file
        open(nojekyll, 'a').close()
        print(f"👍 Ensured {nojekyll}")
    except Exception as e:
        print(f"⚠️  Could not write .nojekyll: {e}")

    # 2) Write CNAME
    cname = os.path.join(out_dir, 'CNAME')
    try:
        with open(cname, 'w') as f:
            f.write('zentropic.ai')
        print(f"👍 Wrote {cname}")
    except Exception as e:
        print(f"⚠️  Could not write CNAME: {e}")

if __name__ == '__main__':
    main()
