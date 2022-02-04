# Git

## 1. 在 Windows 上安装 Git

### 1.1 安装 Git 程序

1. 在Windows上使用Git，可以从Git官网直接[下载安装程序](https://git-scm.com/downloads)，然后按默认选项安装即可。
2. 安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！

### 1.2 设置用户的名字和 Email 地址

```git
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

注意`git config`命令的`--global`参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

## 2. 创建版本库

### 2.1 创建空目录

```
$ mkdir <directory name>
```

### 2.2 进入空目录

```
$ cd <directory name>
```

### 2.3 显示当前目录地址

```
$ pwd
```

### 2.4 将当前目录变成 Git 可以管理的仓库

```git
$ git init
```

## 3. 将文件添加至版本库

1. 用命令`git add`告诉Git，把文件添加到仓库：

```
$ git add readme.txt
```

2. 第二步，用命令`git commit`告诉Git，把文件提交到仓库：

```
$ git commit -m "wrote a readme file"
[master (root-commit) eaadf4e] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
```

`-m`后面输入的是本次提交的说明；

`git commit`命令执行成功后会告诉你，`1 file changed`：1个文件被改动（我们新添加的readme.txt文件）；`2 insertions`：插入了两行内容（readme.txt有两行内容）。

## 4. 查询版本库状态

### 4.1 命令

```
$ git status
```

### 4.2 文件已被修改，但没有被添加到暂存区 stage

```
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

上面的命令输出告诉我们，`readme.txt`被修改过了，但还没有准备提交的修改。

### 4.3 文件已被修改，并已被添加到暂存区 stage

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   readme.txt
```

`git status`告诉我们，将要被提交的修改包括`readme.txt`


## 5. 查询文件被修改的内容

```
$ git diff readme.txt
```

## 6. 查询 commit 历史记录

### 6.1 输出详细提交日志

#### 6.1.1 命令

```
$ git log
```

#### 6.2 提交日志

```
$ git log
commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master)
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 21:06:15 2018 +0800

    append GPL

commit e475afc93c209a690c39c13a46716e8fa000c366
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 21:03:36 2018 +0800

    add distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 20:59:18 2018 +0800

    wrote a readme file
```

`git log`命令显示从最近到最远的提交日志，我们可以看到3次提交，最近的一次是`append GPL`，上一次是`add distributed`，最早的一次是`wrote a readme file`。

`commit`是版本号。

### 6.2 输出简略提交日志

#### 6.2.1 命令

```
$ git log --pretty=oneline
```

#### 6.2.2 提交日志

```
$ git log --pretty=oneline
1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master) append GPL
e475afc93c209a690c39c13a46716e8fa000c366 add distributed
eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme file
```

## 7. 查询命令记录

### 7.1 命令

```git
$ git reflog
```

### 7.2 命令记录

```git
$ git reflog
e475afc HEAD@{1}: reset: moving to HEAD^
1094adb (HEAD -> master) HEAD@{2}: commit: append GPL
e475afc HEAD@{3}: commit: add distributed
eaadf4e HEAD@{4}: commit (initial): wrote a readme file
```



## 7. 回退版本

### 7.1 指向某个版本

- 当前版本：`HEAD`
- 上一个版本：`HEAD^`
- 上上一个版本：`HEAD^^`
- 上 n 个版本：`HEAD~n`

### 7.2 命令

#### 7.2.1 回到上个版本：

```
$ git reset --hard HEAD^
```

#### 7.2.2 回到某个版本：

```
$ git reset --hard commit前几位
```

## 8. 撤销修改

### 8.1 撤销工作区内的修改

#### 8.1.1 命令

```
$ git checkout -- readme.txt
```

#### 8.1.2 不同情况

- 一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

- 一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

### 8.2 撤销暂存区修改

#### 8.2.1 命令

```
$ git reset HEAD readme.txt
```

## 9. 删除文件

### 9.1 删除本地文件的命令

```
$ rm test.txt
```

### 9.2 从版本库中删除文件的命令

```
$ git rm test.txt
$ git commit -m "remove test.txt"
```

### 9.3 从版本库恢复误删的文件

### 9.3.1 命令

```
$ git checkout -- test.txt
```

## 10. 用版本库里的版本替换工作区的版本

### 10.1 命令

```
$ git checkout -- test.txt
```

## 11. 远程仓库

### 11.1 Git 服务器

- GitHub
- Gitee
- 自行搭建

### 11.2 SSH Key

#### 11.2.1 用处

> 地Git仓库和GitHub仓库之间的传输通过SSH加密。

#### 11.2.2 创建 SSH Key

##### 11.2.2.1 命令

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

#### 11.2.3 在 GitHub 上添加 SSH

如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

登陆GitHub，打开“Account settings”，“SSH Keys”页面。

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容。

### 11.3 在 GitHub 上创建 Git 仓库

[添加远程库 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440)

### 11.4 本地仓库链接 GitHub 仓库

#### 11.4.1 命令

```
$ git remote add origin git@github.com:GunBusterNoLiKo/myCode.git
```

添加后，远程库的名字就是`origin`，这是Git默认的叫法，也可以改成别的，但是`origin`这个名字一看就知道是远程库。

### 11.5 将本地库的所有内容推送到远程库

#### 11.5.1 关联本地与远程分支并将本地库的所有内容推送到远程库

##### 11.5.1.1 命令

```git
$ git push -u origin master
```

把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。

由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

#### 11.5.2 将本地库的所有内容推送到远程库

##### 11.5.2.1 命令

从现在起，只要本地作了提交，就可以通过命令：

```
$ git push origin master
```

把本地`master`分支的最新修改推送至 GitHub。

### 11.6 解决 ssh: connect to host github.com port 22: Connection refused 报错

1. [git报错ssh: connect to host github.com port 22: Connection timed out_nightwishh的博客-CSDN博客](https://blog.csdn.net/nightwishh/article/details/99647545)

2. [【git 端口拒绝解决方案】ssh: connect to host github.com port 22: Connection refused_码农msl的博客-CSDN博客_git ssh22端口拒绝连接](https://blog.csdn.net/weixin_38146633/article/details/121963282)

### 11.7 查询远程库信息

#### 11.7.1 命令

```
$ git remote
```

或

```
$ git remote -v
```

#### 11.7.2 远程库信息

```
origin
```

或

```
$ git remote -v
origin  git@github.com:michaelliao/learn-git.git (fetch)
origin  git@github.com:michaelliao/learn-git.git (push)
```

### 11.8 解除本地库与远程库的绑定关系

#### 11.8.1 命令

```
$ git remote rm origin
```

此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到 GitHub，在后台页面找到删除按钮再删除。

### 11.9 从远程库克隆

#### 11.9.1 命令

```
$ git clone git@github.com:GunBusterNoLiKo/gitskills.git
```

## 12. 分支管理

### 12.1 创建与合并分支

#### 12.1.1 创建分支

##### 12.1.1.1 命令

```
$ git branch dev
```

#### 12.1.2 切换分支

##### 12.1.2.1 命令

```
$ git checkout dev
```

或

```
$ git switch dev
```

#### 12.1.3 创建并切换分支

##### 12.1.3.1 命令

```
$ git checkout -b dev
```

或

```
$ git switch -c dev
```

#### 12.1.4 合并指定分支到当前分支

##### 12.1.4.1 用 Fast forward 合并分支命令

```
$ git merge dev
```

##### 12.1.4.2 禁用 Fast forward 合并分支命令

```
$ git merge --no-ff -m "" dev
```

#### 12.1.5 删除分支

##### 12.1.5.1 命令

```
$ git branch -d dev
```

#### 12.1.6 查看分支

##### 12.1.6.1 命令

```
$ git branch
```

### 12.2 解决冲突

- 当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

- 解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

- 用`git log --graph`命令可以看到详细分支合并图。

- 用以下命令可以看到简略分支合并图：

  - ```
    $ git log --graph --pretty=oneline --abbrev-commit
    ```

### 12.3 分支管理策略

首先，`master`分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

那在哪干活呢？干活都在`dev`分支上，也就是说，`dev`分支是不稳定的，到某个时候，比如1.0版本发布时，再把`dev`分支合并到`master`上，在`master`分支发布1.0版本；

你和你的小伙伴们每个人都在`dev`分支上干活，每个人都有自己的分支，时不时地往`dev`分支上合并就可以了。

所以，团队合作的分支看起来就像这样：

![分支管理策略](E:\myCode\Web\course\HTML_CSS_Javascript\js\Web APIs\md_pic\git\分支管理策略.png)

### 12.4 Bug 分支

#### 12.4.1 暂存当前工作现场的指令

```git
$ git stash
```

#### 12.4.2 查看被保存的工作现场指令

```git
$ git stash list
```

```git
$ git stash list
stash@{0}: WIP on master: dcbfeb6 merge with no-ff
```

#### 12.4.3 恢复工作现场

##### 12.4.3.1 只恢复，不删除工作现场的指令

```git
$ git stash apply
```

##### 12.4.3.2 删除工作现场的指令

```git
$ git stash drop
```

##### 12.4.3.3 恢复并删除工作现场的指令

```
$ git stash pop
```

#### 12.4.4 复制特定的提交到当前分支的指令

```
$ git cherry-pick commitID
```

#### 12.4.4 修复 Bug 步骤

1. 如果手头工作没有完成，先使用`$ git stash`暂存工作现场；
2. 创建新的 bug 分支进行修复，然后与 master 分支合并，最后删除 bug 分支；
3. 修复 bug 后，使用`$ git stash pop`回到工作现场；
4. 使用`$ git cherry-pick <commit>`命令将修改 bug 的提交内容复制到当前分支。

## 13. Feature 分支

开发一个新功能（new feature）时，最好新建一个 feature 分支；

### 13.1 丢弃没有被合并过的分支指令

```
$ git branch -D 分支名
```

## 14. 多人协同

- 查看远程库信息，使用`git remote -v`；
- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
- 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。
- 如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to <branch-name> origin/<branch-name>`。

## 15. Rebase

### 15.1 命令

```git
$ git rebase
$ git log --graph --pretty=oneline --abbrev-commit
```

### 15.2 作用

- rebase操作可以把本地未push的分叉提交历史==整理成直线==；
- rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

[Git - 变基 (git-scm.com)](https://git-scm.com/book/zh/v2/Git-分支-变基)

[git merge 与 git rebase的区别_Michael’s Blog-CSDN博客_rebase和merge区别](https://blog.csdn.net/michaelshare/article/details/79108233)

## 15. 标签

### 15.1 定义 && 作用

==发布==一个==版本时==，我们通常先在版本库中==打一个标签（tag）==，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

Git的==标签==虽然是版本库的快照，但其实它就是==指向某个commit的指针==（跟分支很像对不对？但是分支可以移动，标签==不能移动==），所以，创建和删除标签都是瞬间完成的。

### 15.2 新建标签

#### 15.2.1 给当前 commit 新建标签

```
$ git tag <tagname>
```

#### 15.2.2 给指定 commit 添加标签

```git
$ git tag <tagname> <commiit>
```

#### 15.2.3 添加带有信息的标签

```git
$ git tag -a <tagname> -m "<message>" [<commit>]
```

### 15.3 查看标签

```git
$ git tag
```

- 按照字母和数字排序显示

### 15.4 推送标签到远程库的命令

```
$ git push origin <tagname>
```

### 15.5 删除标签

#### 15.5.1 删除本地标签的命令

```
$ git tag -d <tagname>
```

#### 15.5.2 删除远程库标签的命令

```git
$ git push origin :refs/tags/v0.9
```

### 15.4 提示

>  注意：标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。

## 16. 使用 GitHub

[使用GitHub - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/900937935629664)

## 17. 使用Gitee && 一个本地库链接多个远程库

[使用Gitee - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/1163625339727712)

## 18. 自定义 git

### 18.1 忽略特殊文件

[忽略特殊文件 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/900004590234208)

### 18.2 自定义别名的命令

```
$ git config --global alias.<别名> <原始命令>
```

- `--global`在所有库中生效

## 19. 搭建 git 服务器

[搭建Git服务器 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/899998870925664)

## 20.使用 git 图形界面工具

[使用SourceTree - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/1317161920364578)
