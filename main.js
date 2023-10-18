// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

const isAdmin = function(user){
    return user.userRole === 'ADMIN'
}

const getEmail = function(user){
    return (user.firstName[0] + user.lastName + '.prsvr@gmail.com').toLowerCase()
}

const getPlaylistLength = function(playlist){
    return playlist.songs.length
    // return playlist['songs'].length    
}

const getHardestHomework = function(homework){
    let hardest = ''
    let lowestScore = 9000
    for (let assignment of homework){
        if (assignment.averageScore < lowestScore) {
            lowestScore = assignment.averageScore
            hardest = assignment.name
        }
    }
    return hardest
}

const createPhonebook = function(dir1, dir2) {
    let phoneBook = {}
    for (let i = 0; i < dir1.length; i++) {
        phoneBook[dir1[i]] = dir2[i]
    }
    return phoneBook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};