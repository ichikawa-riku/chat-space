## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :massages
- has_many :groups, through:group-users
- has_many :group-users

## gropusテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :massages
- has_many :user, through:group-users
- has_mane :group-users
- accepts_nested_attributes_for :group-users

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: true|
|image|string|null: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## group-usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

