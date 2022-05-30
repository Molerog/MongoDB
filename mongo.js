db.posts.insertMany([
    {title: 1, body: "Lorem impsum 1", Username: "German", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 2, body: "Lorem impsum 2", Username: "Sofia", Comments: [{Usermame:"Name", Body:"BodyText"},{Usermame:"Name", Body:"BodyText2"}]},
    {title: 3, body: "Lorem impsum 3", Username: "Ger", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 4, body: "Lorem impsum 4", Username: "Ivan", Comments:[{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 5, body: "Lorem impsum 5", Username: "Xavi", Comments:[{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 6, body: "Lorem impsum 6", Username: "Gabri", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 7, body: "Lorem impsum 7", Username: "Vicent", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 8, body: "Lorem impsum 8", Username: "Rebeca", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 9, body: "Lorem impsum 9", Username: "Vane", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 10, body: "Lorem impsum 10", Username: "Ludovico",  Comments: [{Usermame:"Name", Body:"BodyText"},{Usermame:"Name", Body:"BodyText2"}]},
    {title: 11, body: "Lorem impsum 11", Username: "Shan", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 12, body: "Lorem impsum 12", Username: "David", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 13, body: "Lorem impsum 13", Username: "Yorch", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 14, body: "Lorem impsum 14", Username: "Alex", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]},
    {title: 15, body: "Lorem impsum 15", Username: "Mike", Comments: [{Usermame:"Name", Body:"BodyText"}, {Usermame:"Name", Body:"BodyText2"}]}
])

db.posts.updateOne({title: 1},
{ $set: {body: "Lorem modified", Username: "Modified", Comments: [{Usermame:"Name", Body:"BodyTextModified"}, {Usermame:"Name", Body:"BodyTextModifoed"}]}})

db.posts.updateOne({title: 1},
    { $set: {Comments: [{Body:"Text modified for this exercise again"}]}})

db.users.updateOne({name: "Rebeca"},
{ $inc: {
    age: 5
    }
})

db.posts.find({
    
       
           Username: "Vane" 
        
    
})

db.users.find({age:{gt:25}},{age:{lt:30}})

db.users.find({$and:[{age:{gt:25}},{age:{lt:30}}]})

db.users.find({$and:[{name: "Ludovico"}, {name: "Sofia"}]})

db.posts.find({$or:[{title: 1},{title: 2}]})

db.users.deleteMany({age:{$gt:30}})

db.posts.find({Comments: {$gte: {$size:2}}})

db.posts.find({$where: "this.comments.length >= 1"})