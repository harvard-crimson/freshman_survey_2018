#!/usr/bin/env python
from jinja2 import FileSystemLoader, Template
from jinja2.environment import Environment
import os
import re

env = Environment()
env.loader = FileSystemLoader('.')
extension = '.jinja2'

files = os.listdir('jinja2')
for fname in files:
    if not fname[0] == '_':
        if fname[-1 * len(extension):] == extension:
            basename = fname[0:-1 * len(extension)]
            with open('compiled_html/' + basename, 'w+') as f:
                print 'Compiling ' + fname + '...',
                f.write(env.get_template('jinja2/' + fname).render({
                        'filename': basename
                    }).encode('utf-8'))
                print 'done'
print 'Done'
