const carData = [
    {
        type: "Car",
        name: "Kia Picanto",
        price: "3000",
        availability: "Yes",
        rating: "4.2",
        image: "/kia-pecanto.png",
        booked: true, // 🚗 Is this car booked?
        bookingStatus: "active", // 🟢 "active", "past", or "none"
        startDate : "25-03-2025",
        startTime : "17:25",
        driverName : "Rajesh",
    },
    {
        type: "Car",
        name: "Fiat 500",
        price: "2500",
        availability: "Yes",
        rating: "4.8",
        image: "/Fiat-500.png",
        booked: false,
        bookingStatus: "past",
    },
    {
        type: "Car",
        name: "Peugeot 2008",
        price: "2600",
        availability: "No",
        rating: "4.4",
        image: "/peugeot-2008.png",
        booked: false,
        bookingStatus: "past",
    },
    {
        type: "Bike",
        name: "Bajaj Avenger 150",
        price: "1900",
        availability: "Yes",
        rating: "4.1",
        image: "/Avenger-150.png",
        booked: false,
        bookingStatus: "none",
    },
    {
        type: "Car",
        name: "Volkswagen Polo",
        price: "3400",
        availability: "Yes",
        rating: "4.0",
        image: "/volkswagen-polo.png",
        booked: false,
        bookingStatus: "none",
    },
    {
        type: "Car",
        name: "Nissan Qashqai",
        price: "3600",
        availability: "Yes",
        rating: "3.8",
        image: "/nissan-qashqai.png",
        booked: false,
        bookingStatus: "none",
    },
  ];
  
  export default carData;