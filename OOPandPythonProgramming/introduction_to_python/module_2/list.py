#list, array, collection are same (simple terms)
# ind     0   1   2   3
numbers=[545,668,346,564]
# ind   -4   -3  -2  -1
print(numbers[1],numbers[-1])
# list(start:end)smae as for(ll i=start;i<end;i++)
print(numbers[1:3])
# list(start:end:step)smae as for(ll i=start;i<end;i+=step)
print(numbers[0:4:2])
# list(end:start:step)smae as for(ll i=end;i>=start-1;i+=step)
print(numbers[3:1:-1])
# list(start:)smae as for(ll i=start;i>numbers.size();i++)
print(numbers[3:])
# list(:end)smae as for(ll i=0;i>=end;i++)
print(numbers[:2])
# list(:)smae as for(ll i=0;i>numbers.size();i++)
print(numbers[:])
# list(::-1)smae as for(ll i=numbers.size();i>=0;i--)
print(numbers[::-1])