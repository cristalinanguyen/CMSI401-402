
class Employee:
    # instead of specific arguments use a dictionary with arguments
    def __init__(self, dictionary):
        self.id = dictionary['id']
        self.first_name = dictionary['first_name']
        self.last_name = dictionary['last_name']
        self.year = dictionary['year']
        self.block = dictionary['block'] if 'block' in dictionary else None
        self.off = dictionary['off'] if 'off' in dictionary else None
        self.ward = dictionary['ward'] if 'ward' in dictionary else None
        self.poss_list = dictionary['poss_list'] if 'poss_list' in dictionary else None
        self.shifts = dictionary['shifts'] if 'shifts' in dictionary else None
