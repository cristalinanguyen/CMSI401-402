class ShiftNode:
    def __init__(self, shift):
        self.shift = shift
        self.next = None

class CreateList:
    def __init__(self):
        self.head = ShiftNode(None)
        self.tail = ShiftNode(None)
        self.head.next = self.tail
        self.tail.next = self.head
    
    def add(self, shift):
        newNode = ShiftNode(shift)
        # if the list is empty, both head and tail point to newNode
        if self.head.shift is None:
            self.head = newNode
            self.tail = newNode
            newNode.next = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
            self.tail.next = self.head

    def rotate(self, places):
        current = self.head
        while(places < 9):
            current = current.next
            places += 1
        self.head = current

    def reverse(self, places):
        current = self.head
        places = 10 - places
        while(places < 9):
            current = current.next
            places += 1
        self.head = current

    def display(self):
        current = self.head
        if self.head is None:
            print('empty list')
            return
        else:
            print(current.shift)
            while(current.next != self.head):
                current = current.next
                print(current.shift)

    def getList(self):
        current = self.head
        shifts = []
        shifts.append(current.shift)
        while(current.next != self.head):
            current = current.next
            shifts.append(current.shift)
        return shifts

class CircularLinkedList1(CreateList):
    def __init__(self, off):
        self.off = off
        c = CreateList()
        c.add('OFF')
        c.add('DF')
        c.add('SC')
        c.add('LC')
        c.add('NF')
        c.add('DF')
        c.add('SC')
        c.add('LC')
        c.rotate(self.off)
        # c.display()

class CircularLinkedList2:
    def __init__(self, off):
        self.off = off - 4
        c = CreateList()
        c.add('SC')
        c.add('LC')
        c.add('NF')
        c.add('DF')
        c.add('OFF')
        c.add('SC')
        c.add('LC')
        c.add('DF')
        c.rotate(self.off)
        # c.display()

def main():
    CircularLinkedList1(4)
    print('\n')
    CircularLinkedList1(7)
    print('\n')
    CircularLinkedList2(8)

if __name__ == "__main__":
    main()