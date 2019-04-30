#!/bin/bash

split_init() {
    tmux splitw -h
    tmux splitw -v
    tmux selectp -t 0
    tmux splitw -v
}

cd /Users/Jacob/Hujiang/project
tmux new-session -s project -n common1 -d
split_init

cd /Users/Jacob/Hujiang/project
tmux new-window -t project -n common2
split_init

cd
tmux new-window -t project -n mysql
split_init

cd
tmux new-window -t project -n remote
tmux splitw -h

cd
tmux new-window -t project -n other
tmux splitw -h -p 50

tmux new-window -t project -n self
tmux send-keys "cd" C-m

tmux attach -t project:0
