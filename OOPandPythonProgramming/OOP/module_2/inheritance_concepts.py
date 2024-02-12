
#? base class, parent class
class BaseClass:
    pass

#? derived class, child class
class DerivedClass:
    pass


"""
1. simple inheritance: parent class --> child class (device --> phone)

                  parent
                    |
                    |
                    |
                    |
                  \ | / 
                   \ /
                  child
                   

2. multi-level inheritance: grandparents --> parents --> child (vehicle --> bus --> acbus)

               grandparent
                    |
                    |
                    |
                    |
                  \ | / 
                   \ /
                  parent
                    |
                    |
                    |
                    |
                  \ | / 
                   \ /
                  child


3. multiple inheritance: grandparents --> (parents,uncle/aunty) -->child
              grand-parents
                   /\
                  /  \
                 /    \
                /      \
               /        \
              /          \
             /            \
            /              \
           /                \
     aunty/uncle          mom\dad
          \                  /
           \                /
            \              /
             \            /
              \          /
               \        /
                \      /
                 \    /
                  \  /
                   \/
                 child

"""