
# *computer folder is an example of composition
# *composition provides 'has a' relation
class Engine:
    def __init__(self) -> None:
        pass
    def start(self):
        return "Engine started"

#* car 'has a' driver
class Driver:
    def __init__(self) -> None:
        pass

#* car 'has a' engine
class Car:
    def __init__(self) -> None:
        self.engine=Engine()        
        self.driver=Driver()        
    def start(self):
        self.engine.start()