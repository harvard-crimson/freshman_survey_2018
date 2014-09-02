#!/usr/bin/env python
from jinja2 import FileSystemLoader, Template
from jinja2.environment import Environment
import os
import re

env = Environment()
env.loader = FileSystemLoader('.')
extension = '.html.jinja2'

files = os.listdir('jinja2')
for fname in files:
    if not fname[0] == '_':
        if fname[-1 * len(extension):] == extension:
            basename = fname[0:-1 * len(extension)]
            if basename == 'index':
                path = 'compiled_html'
            else:
                path = os.path.join('compiled_html', basename)
            if not os.path.exists(path):
                os.makedirs(path)
            with open(os.path.join(path, 'index.html'), 'w+') as f:
                print 'Compiling ' + fname + '...',
                f.write(env.get_template('jinja2/' + fname).render({
                        'filename': basename
                    }).encode('utf-8'))
                print 'done'
print 'Done'
