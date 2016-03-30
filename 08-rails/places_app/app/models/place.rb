# == Schema Information
#
# Table name: places
#
#  id         :integer          not null, primary key
#  name       :text
#  address    :text
#  latitude   :float
#  longitude  :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Place < ActiveRecord::Base
  geocoded_by :address
  validates :address, :presence => true
  after_validation :geocode
end
