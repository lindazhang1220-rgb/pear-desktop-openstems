# Pear OpenStems

<div align="center">

<h3>把音乐播放器变成现场伴奏、分轨控制器、K歌工具和直播音源。</h3>

<p>
Built on the official open-source
<a href="https://github.com/pear-devs/pear-desktop">Pear Desktop</a> project.
OpenStems is the added music-control experience for singers, streamers,
karaoke users, cover creators, instrumentalists, and music learners.
</p>

<p>
<a href="https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases/latest"><strong>Download macOS .pkg</strong></a>
 ·
<a href="#安装和首次打开">安装</a>
 ·
<a href="#在-obs-中直播">OBS</a>
 ·
<a href="#在录音编曲软件中使用">DAW / AU</a>
 ·
<a href="#english">English</a>
</p>

</div>

![Pear OpenStems realtime stem controls](docs/assets/screenshots/pear-openstems-realtime.png)

## 一句话

Pear OpenStems 基于官方开源 [Pear Desktop](https://github.com/pear-devs/pear-desktop)
开发，让一首歌不再只是一整块声音，而是可以被你拿来唱、拿来演、拿来直播、拿来练习。

你可以在播放器里直接升降调、降低主唱、调整分轨平衡、做 K歌伴奏，把当前音乐送进
OBS，也可以把伴奏送进录音编曲软件，和人声链路、效果器、监听、录音轨一起做实时混音。

## 适合这些场景

| 场景 | 你可以怎么用 |
| --- | --- |
| 普通直播 | 把当前音乐混音一键送进 OBS，作为直播间音乐源。 |
| 唱歌直播 | 把伴奏送进录音编曲软件，和麦克风、人声效果、监听一起混。 |
| K歌和翻唱 | 降低或静音主唱，快速得到适合自己音域的伴奏。 |
| 乐器练习 | 保留乐队伴奏，降低你想自己演奏的声部。 |
| 学歌和听编曲 | 听清主唱、和声、鼓、贝斯、钢琴、吉他和其他声部。 |

## 三种分轨模式

| 模式 | 可控制的音乐部分 | 更适合 |
| --- | --- | --- |
| Realtime | Vocals, Bass, Drums, Piano, Others | 边播边调、直播、快速练习、低延迟控制 |
| Karaoke HQ | Lead Vocal, Accompaniment | K歌、翻唱、降低主唱、制作干净伴奏 |
| 8 Stems HQ | Lead Vocal, Backing Vocal, Guitar, Bass, Drums, Piano, Wind, Others | 精细练习、学编曲、乐器排练、现场伴奏混音 |

## 两条直播路径

### 在 OBS 中直播

普通直播时，不需要先导出音频文件。打开 OBS，在 Pear OpenStems 播放音乐并调整好分轨，
点击 `Send to OBS`，当前 OpenStems 混音就可以进入直播场景。

![Pear OpenStems sending audio to OBS](docs/assets/screenshots/pear-openstems-send-to-obs.png)

### 在录音编曲软件中使用

唱歌直播和录音时，OBS 往往不是全部。你可能需要把伴奏放进录音编曲软件里，和麦克风输入、
人声效果、监听、录音轨、主输出一起处理。

macOS 安装包会同时安装 Pear OpenStems 应用和 Pear OpenStems Audio Unit 插件。
在你的 DAW 或录音编曲软件里：

1. 新建一条立体声 instrument 音轨、Software Instrument 音轨，或 Audio Unit Generator 音轨。
2. 在这条音轨上加载 `Pear OpenStems` Audio Unit 插件。
3. 保持音轨启用，并把输出送到主输出、监听总线、人声混音链路或录音链路。
4. 在 Pear OpenStems 中播放音乐。
5. 打开 OpenStems 控制中心，点击 `Send to DAW`。
6. 在 Pear OpenStems 里调整 key、人声、伴奏或分轨平衡，同时让 DAW 处理人声效果、监听、混音和录音。

不同 macOS 录音编曲软件里的 AU 音轨菜单名称可能不同。关键点相同：
新建 instrument 类型的 AU 音轨，加载 Pear OpenStems，保持音轨可听，然后从播放器发送音乐。

![Pear OpenStems in recording software](docs/assets/screenshots/pear-openstems-recording-software.png)

## 安装和首次打开

1. 从 [GitHub Releases](https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases/latest)
   下载 Pear OpenStems macOS `.pkg`。
2. 打开安装包并完成安装。
3. 从 Applications 启动 Pear OpenStems。
4. 像平常一样播放音乐。
5. 需要升降调、人声控制、分轨平衡、OBS 输出或 DAW 输出时，打开 OpenStems 控制中心。

如果 macOS 首次启动前要求确认，请打开 `系统设置 > 隐私与安全性`，允许 Pear OpenStems。

## 快速用法

| 想做什么 | 操作 |
| --- | --- |
| 升降调 | 播放歌曲，移动 key 控制；回到 `0` 即回到原调。 |
| 做 K歌伴奏 | 选择 Karaoke HQ，降低或静音 Lead Vocal，保留 Accompaniment。 |
| 练乐器 | 选择 Realtime 或 8 Stems HQ，降低你想自己演奏的声部。 |
| 进 OBS | 打开 OBS，播放音乐，点击 `Send to OBS`。 |
| 进 DAW | 加载 Pear OpenStems AU 插件，播放音乐，点击 `Send to DAW`。 |

<details>
<summary>更多真实产品截图</summary>

### Karaoke HQ

![OpenStems karaoke backing track controls](docs/assets/screenshots/pear-openstems-karaoke.png)

### 8 Stems HQ

![OpenStems 8-stem controls](docs/assets/screenshots/pear-openstems-8-stems.png)

### OBS 场景

![Pear OpenStems in OBS](docs/assets/screenshots/pear-openstems-obs.png)

### Send to DAW

![Pear OpenStems sending audio to recording software](docs/assets/screenshots/pear-openstems-send-to-daw.png)

</details>

## 常见问题

| 问题 | 可以检查什么 |
| --- | --- |
| App 打不开 | 确认当前系统是 macOS。如果 macOS 阻止打开，请在 `系统设置 > 隐私与安全性` 中允许，然后从 Applications 再次启动。 |
| 听不到声音 | 检查 Mac 当前声音输出，确认播放器没有静音，关闭 `Send to OBS` 和 `Send to DAW`，并把 key 调回 `0`。 |
| 分轨控制没有准备好 | 确认歌曲正在播放，等待 OpenStems 控制更新，或换一首歌测试。 |
| Send to OBS 不工作 | 先打开 OBS，再关闭并重新开启 `Send to OBS`。 |
| Send to DAW 不工作 | 先打开录音编曲软件，在 instrument 或 Audio Unit Generator 音轨上加载 Pear OpenStems Audio Unit 插件，确认音轨可听，再关闭并重新开启 `Send to DAW`。 |

---

## English

Pear OpenStems is an OpenStems extension built on the official open-source
[Pear Desktop](https://github.com/pear-devs/pear-desktop) project.

It turns a familiar desktop music player into a live backing-track tool: change
key, lower or mute the lead vocal, rebalance stems, create karaoke and cover
tracks, send music to OBS, or route the accompaniment into your DAW through the
Pear OpenStems Audio Unit plug-in.

### Stem Modes

| Mode | Stems | Best for |
| --- | --- | --- |
| Realtime | Vocals, Bass, Drums, Piano, Others | Live adjustment, streaming, quick practice |
| Karaoke HQ | Lead Vocal, Accompaniment | Karaoke, covers, vocal reduction |
| 8 Stems HQ | Lead Vocal, Backing Vocal, Guitar, Bass, Drums, Piano, Wind, Others | Arrangement study, instrument practice, performance mixes |

### DAW Setup

1. Open your DAW or recording software.
2. Create a stereo instrument track, Software Instrument track, or Audio Unit Generator track.
3. Load the `Pear OpenStems` Audio Unit plug-in on that track.
4. Keep the track audible and routed to your output, monitor bus, vocal mix, or recording chain.
5. Play music in Pear OpenStems.
6. Click `Send to DAW` in the OpenStems control center.

## Project Note

Pear OpenStems is built on the official open-source
[Pear Desktop](https://github.com/pear-devs/pear-desktop) project. This project
is not affiliated with, authorized by, endorsed by, or officially connected with
Google, YouTube, or YouTube Music. Trademarks belong to their respective owners.
