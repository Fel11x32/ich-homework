#!/bin/bash

read -p "Введите адрес: " target

failure_count=0

while true
do
    ping_result=$(ping -c 1 -W 1 "$target" | grep 'time=')

    if [ -z "$ping_result" ]; then
        failure_count=$((failure_count + 1))
        echo "Количество неудачных попыток: $failure_count"

        if [ "$failure_count" -ge 3 ]; then
            echo "3 неудачных попытки"
            break
        fi
    else
        ping_time=$(echo "$ping_result" | awk -F'time=' '{print $2}' | awk '{print $1}')
        
        if (( $(echo "$ping_time > 100" | bc -l) )); then
            echo "Время пинга превышает 100 мс Время: $ping_time ms"
        fi

        failure_count=0
    fi

    sleep 1
done