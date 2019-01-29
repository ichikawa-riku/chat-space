## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :massages
- has_many :groups, through:members
- has_many :members
