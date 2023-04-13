one, two = 0, 0
ans = 0
numbers = ()
for i in range(len(numbers)):
    for j in range(2, numbers[i]):

        if (numbers[i] % j == 0):
            one = j
            two = range(2, (numbers[i] - 1))
            ans = numbers[i]
            for k in two:
                if one * k == ans:
                    print("{}={}*{}".format(numbers[i], one, k))
                break
