class Employee:
    # instead of specific arguments use a dictionary with arguments
    def __init__(self, dictionary):
        self.id = dictionary['id']
        self.first_name = dictionary['first_name']
        self.last_name = dictionary['last_name']
        self.year = dictionary['year']
        self.off = dictionary['off'] if 'off' in dictionary else None