# wordwad
Choose your own adventure app


|Method|Path|Type|Data In|Data Out|Description|
|------|-----|----|----|-----|----|
|GET| /|html|List of some stories??|main.html| main home page with top/ most current stories|
|GET|/story|html| story fragments|stories.html| story page, can pick story here|
|GET|/story/:story|data|story title| JSON story info|a story and all it's threads|
|GET|/authors|html|List of Users|User.html| list of authors can pick from users story/stories to follow|
|GET|/login|html|authenication|login.html|authenication page|
|GET| /api/story|data|JSON story data| null|story api|
|GET| /api/story/:story|data|specific story data| null|Get specific story|
|POST|/api/story|data|post JSON data|story data|Post Story Fragment|
|POST|/login|data|password and username| authenicated| authenication post



