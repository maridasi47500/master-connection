import phonenumbers
from phonenumbers import carrier
from phonenumbers.phonenumberutil import number_type
#from text import number
from phonenumbers import geocoder
from phonenumbers import timezone
class MasterLocate:
  def __init__(self,numero):
    self.numero=numero
    self.phone_number=phonenumbers.parse(self.numero)
  def countryhistory(self):
    return phonenumbers.parse(self.numero,"CH")
  def country(self):
    return geocoder.description_for_number(self.numero,"fr")
  def service_provider(self):
    service_provider=phonenumbers.parse(self.numero,"RO")
    return carrier.name_for_number(service_provider,'fr')
  def verifier(self):
    return carrier._is_mobile(number_type(self.phone_number))
  def verifier2(self):
    return phonenumbers.is_valid_number(self.phone_number)
  def timezones(self):
    return timezone.time_zones_for_number(self.phone_number)
  def whatsapp_number(self):
    chars=["+","(",")","-"," "]
    number=self.numero
    for c in chars:
      number = number.replace(c, '')
    return number
  def exporter_methode(self):
    print("exporter method")
    

  
