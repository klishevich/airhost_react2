export function getHouse(house_id, houses) {
    const house_id2 = house_id || -1
    const houses2 = houses || []
    var result = houses2.filter(function( obj ) {
      return obj.id == house_id2
    })
    return result.length > 0 ? result[0] : { }
}

export function getHouseBookings(house_id, bookings) {
    const bookings2 = bookings || []
    var result = bookings2.filter(function( obj ) {
      return obj.house_id == house_id
    })
    return result
}