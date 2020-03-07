# myetc
misc config repo

## Dependency
+ 安装vim
    + 安装插件管理器vundle(https://github.com/VundleVim/Vundle.vim)
+ 安装phoenix(https://github.com/kasper/phoenix)

## Usage
```sh
./init.sh
```
## Function
### vim
+ plugin
    + 文件目录NERDTree
    + markdown相关插件
    + git相关插件
    + vim window切换插件，摆脱<kbd>C-w</kbd>
        + https://github.com/t9md/vim-choosewin
    + 文件搜索, tag搜索
        + https://github.com/wincent/Command-T 需要按照安装教程进行相应安装
+ colorschema
    + violet(柔和不伤眼(^^)https://github.com/ashfinal/vim-colors-violet)

### phoenix
使用<kbd>Alt-Shift</kbd>作为prefix, 使用<kbd>Space</kbd><kbd>0-9</kbd> <kbd>A-Z</kbd>, 作为功能键。
目前有如下功能: App切换或打开(记忆原APP打开状态下的鼠标位置); 鼠标移动到当前应用窗口中心。

+ App切换
    + QQ: <kbd>Alt</kbd><kbd>Shift</kbd><kbd>Q</kbd>
    + Wechat: <kbd>Alt</kbd><kbd>Shift</kbd><kbd>W</kbd>
    + Iterm: <kbd>Alt</kbd><kbd>Shift</kbd><kbd>T</kbd>
    + yEd: <kbd>Alt</kbd><kbd>Shift</kbd><kbd>Y</kbd>
    + Chrome: <kbd>Alt</kbd><kbd>Shift</kbd><kbd>C</kbd>
+ Mouse移动
    + 移动到当前窗口中心: <kbd>Alt</kbd><kbd>Shift</kbd><kbd>Space</kbd>
    + 提醒鼠标位置(使用当前app的icon在鼠标位置提醒): <kbd>Alt</kbd><kbd>Shift</kbd><kbd>Z</kbd>

### tmux
初始化5个 tmux tab, 包含pproject, common, mysql, remote, others 和 self, 每个 tab 切分为 1-4 个 window 
