class Star_Cinema:
    _hall_list = []

    def __init__(self) :
        pass

    def _entry_hall(self, hall):
        self._hall_list.append(hall)

    def __repr__(self) :
        for hall in self._hall_list:
            print(f"HALL NUMBER: {hall._hall_no}")
            print(f"ROWS: {hall._rows}, COLUMS: {hall._cols}")

            print("\nAVAILABLE SHOWS ARE BELOW")
            for show in hall._show_list:
                print(f"Show ID: {show[0]}, NAME: {show[1]}, TIME: {show[2]}")

            print("\nAVAILABLE SEATS ARE")

            for show_id, seat_arrangement in hall._seats.items():
                print(f"AVAILABLE SEATS FOR SHOW ID: {show_id}")

                for row in seat_arrangement:
                    print(" ".join(map(str, row)))
                print()

            print()
        return f"----WELCOME-----\n"


class Hall(Star_Cinema):
    def __init__(self, rows, cols, hall_no) -> None:
        self._seats = {}
        self._show_list = []
        self._rows = rows
        self._cols = cols
        self._hall_no = hall_no
        super().__init__()
        self._entry_hall(self)

    def _entry_show(self, id, movie_name, time):
        if len(self._show_list) == 0:
            show = (id, movie_name, time)
            self._show_list.append(show)

            seat = []
            for i in range(self._rows):
                row = []
                for j in range(self._cols):
                    row.append(0)
                seat.append(row)
            self._seats[id] = seat
            return

        for show in self._show_list:
            if show[0] == id:
                print(f"SHOW ID '{id}' ALREADY EXISTS.")
                return

        show = (id, movie_name, time)
        self._show_list.append(show)

        seat = [[0 for _ in range(self._cols)] for _ in range(self._rows)]
        self._seats[id] = seat

    def _book_seats(self, id, bookings):
        if id in self._seats:
            for book in bookings:
                row = int(book[0])
                col = int(book[1])

                if (row < 0) or (self._rows <= row) or (col < 0) or (self._cols <= col):
                    print(f"\nINVALID SEAT POSITION ({row}, {col}). PLEASE TRY AGAIN!")
                    continue

                if self._seats[id][row][col] == 0:
                    self._seats[id][row][col] = 1
                    print(
                        f"SEAT ({row}, {col}) IS BOOKED FOR SHOW {id}"
                    )

                else:
                    print(
                        f"\nSEAT ({row}, {col}) IS ALREADY BOOKED FOR THE SHOW ID {id}. PLEASE TRY AGAIN!"
                    )

        else:
            print(f"\nINVALID SHOW ID: {id}. PLEASE TRY AGAIN!")

    def _view_show_list(self):
        if len(self._show_list) != 0:
            print("--------------")
            for show in self._show_list:
                print(f"MOVIE NAME : {show[1]}({show[0]}) SHOW ID:{show[0]} TIME: {show[2]}")
            print("--------------")

        else:
            print("\nSORRY! NO SHOWS ARE AVAILABLE TODAY.")

    def _view_available_seats(self, id):
        if len(self._show_list) == 0:
            print("\nSORRY! NO SHOWS ARE AVAILABLE TODAY.")
            return

        if id in self._seats:
            print("\nAVAILABLE SEATS FOR SHOW ",id,":")
            for i in range(len(self._seats[id])):
                for j in range(len(self._seats[id])):
                    print("Seat (",i,", ",j,")")
            print('UPDATED SEATS MATRIX FOR HALL ',self._hall_no,":")        
            for row in self._seats[id]:
                for element in row:
                    print(element, end=" ")
                print()

        else:
            print(f"\nSORRY! INVALID SHOW ID: {id}. PLEASE TRY AGAIN")

    def __repr__(self) -> str:
        print("\nAVAILABLE SHOWS ARE DOWN BELOW")

        for show in self._show_list:
            print(f"SHOW ID: {show[0]}, NAME: {show[1]}, TIME: {show[2]}")

        print("\nAVAILABLE SEATS ARE DOWN BELOW")

        for show_id, seat_arrangement in self._seats.items():
            print(f"AVAILABLE SEATS FOR SHOW ID: {show_id}")

            for row in seat_arrangement:
                print(" ".join(map(str, row)))
            print()

        return f"----WELCOME----\n"


hall1 = Hall(6, 6, 1)
hall1._entry_show("111", "DUNKI", "16/02/2024 12:00PM")
hall1._entry_show("112", "JAWAN", "16/02/2024 2:00PM")

while True:
    print("1. VIEW ALL SHOW TODAY")
    print("2: VIEW AVAILABLE SEATS")
    print("3: BOOK TICKET")
    print("4: EXIT")

    ch = int(input("ENTER OPTION: "))

    if ch == 1:
        hall1._view_show_list()

    elif ch == 2:
        id = input("ENTER SHOW ID: ")
        hall1._view_available_seats(id)

    elif ch == 3:
        id = input("SHOW ID: ")
        seats = int(input("NUMBER OF TICKETS (IN NUMBER): "))

        if seats == 0:
            print("\nINVALID SEATS", seats, "PLEASE TRY AGAIN!")
            continue

        bookings = []

        while seats != 0:
            row = input("ENTER SEAT ROW: ")
            col = input("ENTER SEAT COL: ")
            bookings.append((row, col))
            seats -= 1

        hall1._book_seats(id, bookings)

    elif ch == 4:
        break

    else:
        print("\nINVALID OPTIONS. PLEASE SELECT BETWEEN 1, 2, 3 OR 4")