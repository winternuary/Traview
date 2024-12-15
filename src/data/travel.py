import requests
import pandas as pd

def fetch_travel_info():
    url = "https://apis.data.go.kr/B551011/KorService1/locationBasedList1"
    params = {
        "numOfRows": 50,
        "pageNo": 1,
        "MobileOS": "ETC",
        "MobileApp": "TravelApp",
        "_type": "json",
        "listYN": "Y",
        "arrange": "A",
        "mapX": "129.0756416",
        "mapY": "35.1795543",
        "radius": "30000",
        "serviceKey": "zx4y0EUfte4M0R0sNg35hPlDB+lTO7fGbsEx3Ztjv5YsVXEklR7mlEsOHvOLrGVZ10acMJRqvwE4qW4/0c8qrg==",
    }

    try:
        response = requests.get(url, params=params)
        response.raise_for_status() 
        data = response.json()
        items = data["response"]["body"]["items"]["item"]
        return items
    except requests.exceptions.RequestException as e:
        print(f"API 요청 에러: {e}")
        return []

travel_data = fetch_travel_info();

df = pd.DataFrame(travel_data)

print("데이터프레임 구조:")
print(df.head()) 

if "addr1" in df.columns:
    address_analysis = df["addr1"].value_counts()
    print("\n주소별 관광지 개수:")
    print(address_analysis)

# 시각화를 추가하고 싶다면 예:
# import matplotlib.pyplot as plt
# address_analysis.head(10).plot(kind='bar')
# plt.title("Top 10 Locations by Number of Attractions")
# plt.xlabel("Address")
# plt.ylabel("Number of Attractions")
# plt.show()
