#! /bin/bash
echo 'init env start...'

for file in `ls -Ald .* | awk '{print $9}'`; do
    if [ "${file}" = '.git' ] || [ "${file}" = '.gitignore' ] || [ "${file}" = '.' ] || [ "${file}" = '..' ]; then
        continue
    fi
    echo $file
    ln -s `pwd`'/'$file $HOME
done;

echo 'finished'
