---
title: 18 账号管理与ACL权限设置
---

# {{ $frontmatter.title }}

Debian系推荐使用`adduser`和`deluser`，RedHat 系使用`useradd`和`userdel`。

## 创建账户 `adduser`
这个系统除了我以外，还有一个人要经常用，于是我使用`adduser`给他创建一个账号，叫做`qdfzz`。
```bash
binzz@C7VF:~$ su
密码： 
root@C7VF:/home/binzz# adduser qdfzz
info: 正在添加用户"qdfzz"...
info: 从 1000 到 59999 中选择 UID/GID...
info: 正在添加新组"qdfzz" (1001)...
info: 正在添加新用户"qdfzz" (1001) 到组"qdfzz (1001)"...
info: 创建主目录"/home/qdfzz"...
info: 正在从"/etc/skel"复制文件...
新的密码： 
/var/cache/cracklib/cracklib_dict.pwd: 没有那个文件或目录   # 有时会提醒密码不足8位，不管，依然输入那个不足8位的密码。
无效的密码： 密码未通过字典检查 - error loading dictionary
重新输入新的密码： 
passwd：已成功更新密码
正在改变 qdfzz 的用户信息
请输入新值，或直接敲回车键以使用默认值  # 这些信息只是备注的作用，不影响账号的使用。
	全名 []: 
	房间号码 []: 
	工作电话 []: 
	家庭电话 []: 
	其它 []: 
这些信息是否正确？ [Y/n] Y  # 如果某一天发现错了，用`usermod`修改即可。
info: 正在添加新用户"qdfzz"到附加组“users” ...
info: 正在添加用户"qdfzz"到"users"组...
root@C7VF:/home/binzz# 
exit
binzz@C7VF:~$ ls .. -l
总计 8
drwxr-x--- 43 binzz binzz 4096  2月  9 11:22 binzz
drwxr-x---  3 qdfzz qdfzz 4096  2月  9 11:26 qdfzz  # 观察权限，默认是750。
```
登入 qdfzz 后，是一个全新的世界， 就跟刚安装系统时一样！

有的资料写的是`useradd`，不过这种方法有些原始，默认是不创建主目录的。Debian系的`useradd(8)`这么说：
```
useradd is a low level utility for adding users. On Debian, administrators should usually use adduser(8) instead.
```
而 RedHat系的 `man useradd` 和 `man adduser` 都指向 `useradd(8)`，没有`adduser`。

### 家目录的构建方法
`/etc/skel` 是新建用户家目录的一个模板，每新建一个带有家目录的用户，就会将 `/etc/skel` 下的文件复制到新用户的家目录下。

## 修改账户信息 `usermod` & 密码设定 `passwd`
我担心 qdfzz 会通过 `sudo su` 获得root权限而乱来，甚至带来系统级灾难。毕竟这种方法不需要知道root 的密码，用 qdfzz 自己的密码就可以了。事实上我也不知道root密码，因为我印象中是没设过的，一直是用`sudo su`登入root的。这件事情让我一直很疑惑，在后文会得以解决。这时他跑过来问我，韩会会，我怎么不能`sudo`啊？

这让我的担心消失了。但我还是很好奇他为什么不能`sudo`，于是到系统跟前看了看：
```bash
qdfzz@C7VF:~$ sudo su
[sudo] qdfzz 的密码： 
qdfzz 未出现在 sudoers 文件中。
该事件已报告给管理员。
qdfzz@C7VF:~$
```

查了一些资料，原来他没有在 `sudo` 这个组，而我在里面，是因为系统安装时就自动把我的账号`binzz`加进去了。等他技术熟练了，我才满足了他想`sudo`的愿望。
```bash
root@C7VF:/home/binzz# usermod -aG sudo qdfzz
```
登出 qdfzz 后，重新登入，Shell上出现了以下字样，成功!
```bash
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

qdfzz@C7VF:~$ sudo su
[sudo] qdfzz 的密码： 
root@C7VF:/home/qdfzz#      # 成功！
```

然后根据提示，`man sudo_root`，找到了root没有密码的答案：
```
INTRODUCTION
       By  default, the password for the user "root" (the system administrator) is locked. This means you cannot login as root or use su. In‐
       stead, the installer will set up sudo to allow the user that is created during install to run all administrative commands.

       This means that in the terminal you can use sudo for commands that require root privileges. All programs in the menu will use a graph‐
       ical sudo to prompt for a password. When sudo asks for a password, it needs your password, this means that  a  root  password  is  not
       needed.
...
BENEFITS OF USING SUDO
...
       * Every  attacker  trying  to brute-force their way into your box will know it has an account named root and will try that first. What
         they do not know is what the usernames of your other users are.
...
GOING BACK TO A TRADITIONAL ROOT ACCOUNT
       This is not recommended!

       To enable the root account (i.e. set a password) use:

           sudo passwd root
```
不过我在看到上面内容前，就已经：
```bash
binzz@C7VF:~$ sudo su
[sudo] binzz 的密码： 
root@C7VF:/home/binzz# passwd
新的密码： 
/var/cache/cracklib/cracklib_dict.pwd: 没有那个文件或目录
无效的密码： 密码未通过字典检查 - error loading dictionary
重新输入新的密码： 
passwd：已成功更新密码
root@C7VF:/home/binzz# 
```
正好踩中了“This is not recommended!”和 BENEFITS 中提到的问题——容易被攻击。

如果你不太懂网络知识，那就锁回去吧：
```
sudo passwd -l root
```
这使得root账号无法通过密码登入，只能通过`sudo`来获得root权限，用 `sudo su` 来登入root。
```bash
binzz@C7VF:~$ sudo passwd -S root
root L 2026-02-09 0 99999 7 -1  # L 表示锁定，不能通过密码登入。
binzz@C7VF:~$ 
```
`usermod` 的详细用法（[`tldr`是一个GitHub项目](https://github.com/tldr-pages/tldr)）：
```bash
binzz@C7VF:~$ tldr usermod
usermod

Modify a user account.
See also: users, useradd, userdel.
More information: https://manned.org/usermod.

 - Change a username:
   sudo usermod [-l|--login] new_username username

 - Change a user ID:
   sudo usermod [-u|--uid] id username

 - Change a user shell:
   sudo usermod [-s|--shell] path/to/shell username

 - Add a user to supplementary groups (mind the lack of whitespace):
   sudo usermod [-aG|--append --groups] group1,group2,... username

 - Remove a user from specific groups:
   sudo usermod [-rG|--remove --groups] group1,group2,... username

 - Change a user home directory:
   sudo usermod [-m|--move-home] [-d|--home] path/to/new_home username

 - Lock an account:
   sudo usermod [-L|--lock] username

 - Unlock an account:
   sudo usermod [-U|--unlock] username
binzz@C7VF:~$ 
```

## 删除账户 `deluser`
```bash
binzz@C7VF:~$ tldr deluser
deluser

Delete a user from the system.
More information: https://manned.org/deluser.

 - Remove a user:
   sudo deluser username

 - Remove a user and their home directory:
   sudo deluser --remove-home username

 - Remove a user and their home, but backup their files into a .tar.gz file in the specified directory:
   sudo deluser --backup-to path/to/backup_directory --remove-home username

 - Remove a user, and all files owned by them:
   sudo deluser --remove-all-files username
binzz@C7VF:~$
```

