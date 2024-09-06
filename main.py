import requests

# API endpoint to get the bus location
def get_bus_location(bus_id):
    url = f"https://bus-tracking-api.com/location/{bus_id}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()  
    else:
        return None

# Example usage
bus_location = get_bus_location("bus_123")
if bus_location:
    print(f"Bus location: {bus_location['latitude']}, {bus_location['longitude']}")
else:
    print("Unable to fetch bus location")
