#!/usr/bin/env python
# -*- coding: utf-8 -*-

import commands
import six
import sys
import os

def main(argv):

    repositories = [
        ["digego/extempore", "Yuya Chiba"],
        ["wesbos/dad-jokes", "Yuya Chiba"],
        ["donnemartin/gitsome", "blue9"],
        ["highlightjs/highlightjs-xtlang", "Yuya Chiba"],
        ["extemporelang/extemporelang.github.io", "Yuya Chiba"],
        ["cyblue9/blue9s-extempore-songs", "Yuya Chiba"],
        ["cyblue9/github-trending", "Yuya Chiba"],
        ["cyblue9/cyblue9.github.io", "Yuya Chiba"],
        ["k88hudson/git-flight-rules", "cyblue9"],
        ["flxbe/asm-space-invaders", "Yuya Chiba"],
        ["donnemartin/haxor-news", "blue-9"],
        ["cyblue9/seti-black-ui", "Yuya Chiba"],
        ["cyblue9/In_that_book_mercari", "Yuya Chiba"],
        ["asciidwango/js-primer", "blue-9"],
        ["cyblue9/camera_calibration", "千葉裕也"],
        ["cyblue9/Simulation_of_Lanchester-s_laws", "千葉裕也"],
    ]

    os.system("mkdir tmp")
    os.chdir("tmp")

    for repo in repositories:
        os.system("git clone https://github.com/{0}.git".format(repo[0]))
    total_lines = 0
    for repo in repositories:
        six.print_("Calc lines of code in {0} (author:{1})".format(repo[0], repo[1]), end=" is ")
        os.chdir("{0}".format(repo[0].split('/')[1]))
        result = commands.getoutput('git ls-files | xargs -n1 git --no-pager blame -f -w | grep "{0}" | wc -l'.format(repo[1]))
        lines = result.split('\n')[-1].strip()
        print(lines)
        total_lines += int(lines)
        os.chdir("../")

    os.chdir("../")
    print("total lines: {0}".format(total_lines))
    os.system("rm -r tmp")

if __name__ == '__main__':
    main(sys.argv)
