import React from 'react';
import { HomeOutlined, AccountBalanceOutlined, EventSeatOutlined, ReceiptOutlined, CastForEducationOutlined, DevicesOutlined, MovieOutlined, EventOutlined, NotInterestedOutlined, FastfoodOutlined, MoneyOutlined, LocalGroceryStoreOutlined, FitnessCenter, HouseOutlined, LocalAtmOutlined, PetsOutlined, PeopleOutline, SettingsOutlined, DriveEtaOutlined, MenuOutlined } from "@material-ui/icons"

export const Categories = [
  {
    "name": "General",
    "icon": <MenuOutlined fontSize="inherit" />
  },
  {
    "name": "Accomodation",
    "icon": <HomeOutlined fontSize="inherit" />
  },
  {
    "name": "Banks",
    "icon": <AccountBalanceOutlined fontSize="inherit" />
  },
  {
    "name": "Beauty",
    "icon": <EventSeatOutlined fontSize="inherit" />
  },
  {
    "name": "Bills / Utilities",
    "icon": <ReceiptOutlined fontSize="inherit" />
  },
  {
    "name": "Education",
    "icon": <CastForEducationOutlined fontSize="inherit" />
  },
  {
    "name": "Electronics",
    "icon": <DevicesOutlined fontSize="inherit" />
  },
  {
    "name": "Entertainment",
    "icon": <MovieOutlined fontSize="inherit" />
  },
  {
    "name": "Events",
    "icon": <EventOutlined fontSize="inherit" />
  },
  {
    "name": "Fashion",
    "icon": <NotInterestedOutlined fontSize="inherit" />
  },
  {
    "name": "Food",
    "icon": <FastfoodOutlined fontSize="inherit" />
  },
  {
    "name": "Tips, Donations, etc...",
    "icon": <MoneyOutlined fontSize="inherit" />
  },
  {
    "name": "Grocery",
    "icon": <LocalGroceryStoreOutlined fontSize="inherit" />
  },
  {
    "name": "Health & Fitness",
    "icon": <FitnessCenter fontSize="inherit" />
  },
  {
    "name": "Household Expenses",
    "icon": <HouseOutlined fontSize="inherit" />
  },
  {
    "name": "Investment",
    "icon": <LocalAtmOutlined fontSize="inherit" />
  },
  {
    "name": "Pets",
    "icon": <PetsOutlined fontSize="inherit" />
  },
  {
    "name": "People",
    "icon": <PeopleOutline fontSize="inherit" />
  },
  {
    "name": "Software",
    "icon": <SettingsOutlined fontSize="inherit" />
  },
  {
    "name": "Transport",
    "icon": <DriveEtaOutlined fontSize="inherit" />
  },
]


export const AllCategories = [ //data by /kolappannathan/expense-manager-categories
    {
        "name": "Accomodation",
        "subcategories": [
            "Hotels",
            "House Rent",
            "Maintanence Charges",
            "Paying Guest",
            "Security Deposits",
            "Others"
        ]
    },
    {
        "name": "Banks",
        "subcategories": [
            "Charges / Fees",
            "Penalties / Fine"
        ]
    },
    {
        "name": "Beauty",
        "subcategories": [
            "Cosmetics",
            "Parlour",
            "Saloon",
            "Others"
        ]
    },
    {
        "name": "Bills / Utilities",
        "subcategories": [
            "Gas",
            "Electricity",
            "Mobile & Internet",
            "Postal / Mail",
            "Water",
            "Others"
        ]
    },
    {
        "name": "Debt Payback",
        "subcategories": [
            "Loan",
            "To People"
        ]
    },
    {
        "name": "Education",
        "subcategories": [
            "Books",
            "Fee",
            "Xerox",
            "Others"
        ]
    },
    {
        "name": "Electronics",
        "subcategories": [
            "Purchase",
            "Accessories",
            "Service / Maintanence"
        ]
    },
    {
        "name": "Entertainment",
        "subcategories": [
            "Books, Comics, etc...",
            "Games & Toys",
            "Media Purchase",
            "Newspapers",
            "Sports",
            "Subscriptions",
            "Theme parks",
            "TV",
            "Others"
        ]
    },
    {
        "name": "Events",
        "subcategories": [
            "Entry Fee",
            "Parties",
            "Special ocasions",
            "Tours",
            "Others"
        ]
    },
    {
        "name": "Fashion",
        "subcategories": [
            "Bags & Purses",
            "Clothes",
            "Glasses",
            "Jewellery",
            "Footwear",
            "Ironing",
            "Laundry",
            "Tailoring",
            "Watches & Wearbles",
            "Others"
        ]
    },
    {
        "name": "Food",
        "subcategories": [
            "Beverages",
            "Dinning out",
            "Fruits",
            "Snacks",
            "Water"
        ]
    },
    {
        "name": "Tips, Donations, etc...",
        "subcategories": [
            "Donations / Charity",
            "Religious Offerings",
            "Tips"
        ]
    },
    {
        "name": "Government",
        "subcategories": [
            "Taxes",
            "Bills / Charges",
            "Deposits",
            "Others"
        ]
    },
    {
        "name": "Grocery",
        "subcategories": [
            "Household Groceries",
            "Vegetables",
            "Others"
        ]
    },
    {
        "name": "Health & Fitness",
        "subcategories": [
            "Gym",
            "Insurance",
            "Medical Fee",
            "Medicines",
            "Spectacles",
            "Others"
        ]
    },
    {
        "name": "Household Expenses",
        "subcategories": [
            "Alteration",
            "Decoration",
            "Electrical Work",
            "Furniture",
            "Insurance",
            "Pest Control",
            "Plumbing",
            "Toiletries",
            "Others"
        ]
    },
    {
        "name": "Investment",
        "subcategories": [
            "Bank Deposit",
            "Bonds",
            "Cryptocurriences",
            "Gold",
            "Mutual Funds",
            "Real Estate",
            "Stocks",
            "Other Assets",
            "Other Investments"
        ]
    },
    {
        "name": "Pets",
        "subcategories": [
            "Clothing",
            "Food",
            "Medical",
            "Toys",
            "Others"
        ]
    },
    {
        "name": "People",
        "subcategories": [
            "Gifts",
            "Family",
            "Friends",
            "Lending"
        ]
    },
    {
        "name": "Software",
        "subcategories": [
            "Purchases",
            "Subscriptions"
        ]
    },
    {
        "name": "Transport",
        "subcategories": [
            "Bus",
            "Cab / Auto / Taxi",
            "Flight",
            "Metro",
            "Movers / Trucks",
            "Train",
            "Fuel",
            "Insurance",
            "Maintanence",
            "Parking"
        ]
    }
  ]