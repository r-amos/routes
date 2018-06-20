#!/bin/bash
./database.sh
wait
gnome-terminal -e ./webpack.sh
./server.sh
