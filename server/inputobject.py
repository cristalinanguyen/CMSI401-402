class Input_Object:
    def __init__(self, dictionary):
        self.employees = dictionary['employees']
        self.blocks = dictionary['blocks']
        self.num_emp_per_block = dictionary['num_emp_per_block']
        self.locations = dictionary['locations'] if 'locations' in dictionary else None
        # self.weeks = dictionary['weeks']
        # self.shift_types = dictionary['shift_types']