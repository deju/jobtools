# jobtools

Scripts written by Javascript. 

### Usage
- `cd xxx`
- `yarn install`
- `node index.js`
- 😎

### ftp-server
a ftp-server serves file in ftp protocol    
可作为临时的ftp服务器

### mac-robot
 a robot for mac os    
 可作为类似win下的按键精灵

### cheat
[cheat](https://github.com/chrisallenlane/cheat) 类似man的命令行命令，但是直接给出例子，如：

    cheat lsof
    # List all IPv4 network files
    sudo lsof -i4

    # List all IPv6 network files
    sudo lsof -i6

    # List all open sockets
    lsof -i

    # List all listening ports
    lsof -Pnl +M -i4

    # Find which program is using the port 80
    lsof -i TCP:80

    # List all connections to a specific host
    lsof -i@192.168.1.5

    # List all processes accessing a particular file/directory
    lsof </path/to/file>

    # List all files open for a particular user
    lsof -u <username>

    # List all files/network connections a command is using
    lsof -c <command-name>

    # List all files a process has open
    lsof -p <pid>

    # List all files open mounted at /mount/point.
    # Particularly useful for finding which process(es) are using a
    # mounted USB stick or CD/DVD.
    lsof +f -- </mount/point>

    # See this primer: http://www.danielmiessler.com/study/lsof/
    # for a number of other useful lsof tips