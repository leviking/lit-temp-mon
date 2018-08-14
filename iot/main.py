import time
import machine
import bme280
import urequests

i2c = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4))
bme = bme280.BME280(i2c=i2c, address=119)

while True:
    (temp, pressure, rh) = bme.values
    headers = {'content-type': 'application/json'}
    data = '{"temperature":"'+temp+'","pressure":"'+pressure+'","rh":"'+rh+'"}'
    res = urequests.post("URL_OF_TRUTH", data=data, headers=headers)
    print(res.text)
    res.close()
    time.sleep(300)
