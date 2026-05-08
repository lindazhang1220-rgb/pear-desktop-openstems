# Pear OpenStems

<div align="center">

<h3>Live stem control for singers, streamers, cover creators, and musicians.</h3>

<p>
Built on the official open-source
<a href="https://github.com/pear-devs/pear-desktop">Pear Desktop</a> project.
Pear Desktop provides the player foundation. OpenStems adds the live music-control layer.
</p>

<p>
<a href="https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases"><strong>Download macOS .pkg</strong></a>
 |
<a href="#what-it-does">What it does</a>
 |
<a href="#obs">OBS</a>
 |
<a href="#daw--audio-unit">DAW / Audio Unit</a>
 |
<a href="#screenshots">Screenshots</a>
 |
<a href="#chinese-guide">Chinese Guide</a>
</p>

</div>

![Pear OpenStems realtime stem controls](docs/assets/screenshots/pear-openstems-realtime.png)

## What It Does

Pear OpenStems turns a desktop music player into a live backing-track tool.

- Change key while the song plays.
- Lower or mute the lead vocal.
- Balance vocals, drums, bass, piano, and other stems.
- Send the current mix to OBS.
- Send accompaniment to a DAW through the Pear OpenStems Audio Unit plug-in.

## Made For

- Livestream music in OBS without exporting files.
- Singing livestreams with vocals, effects, monitoring, and backing tracks in a DAW.
- Karaoke, covers, vocal practice, and quick key changes.
- Instrument rehearsal, arrangement study, and performance backing tracks.

## Stem Modes

| Mode | Stems | Best for |
| --- | --- | --- |
| Realtime | Vocals, Bass, Drums, Piano, Others | Live adjustment, streaming, quick practice |
| Karaoke HQ | Lead Vocal, Accompaniment | Karaoke, covers, vocal reduction |
| 8 Stems HQ | Lead Vocal, Backing Vocal, Guitar, Bass, Drums, Piano, Wind, Others | Arrangement study, instrument practice, performance mixes |

## OBS

For everyday livestreaming, open OBS, play music in Pear OpenStems, shape the mix, then click `Send to OBS`.

![Pear OpenStems sending audio to OBS](docs/assets/screenshots/pear-openstems-send-to-obs.png)

## DAW / Audio Unit

For singing livestreams and recording sessions, send the backing track into your DAW and mix it with vocals, effects, monitoring, and recording tracks.

1. Open your DAW or recording software.
2. Create a stereo instrument track, Software Instrument track, or Audio Unit Generator track.
3. Load the `Pear OpenStems` Audio Unit plug-in on that track.
4. Keep the track audible and routed to your main output, monitor bus, vocal mix, or recording chain.
5. Play music in Pear OpenStems.
6. Click `Send to DAW`.

Different macOS DAWs name Audio Unit tracks differently. The important part is the same: create an instrument-style Audio Unit track, load Pear OpenStems, keep the track audible, then send music from the player.

![Pear OpenStems in recording software](docs/assets/screenshots/pear-openstems-recording-software.png)

## Install

1. Download the macOS `.pkg` from [GitHub Releases](https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases).
2. Open the package and finish installation.
3. Launch Pear OpenStems from Applications.

If macOS asks for confirmation before first launch, open `System Settings > Privacy & Security` and allow Pear OpenStems.

## Screenshots

<details>
<summary><strong>View product screenshots</strong></summary>

### Realtime Stem Control

![Pear OpenStems realtime stem controls](docs/assets/screenshots/pear-openstems-realtime.png)

### Karaoke And Backing Tracks

![OpenStems karaoke backing track controls](docs/assets/screenshots/pear-openstems-karaoke.png)

### Up To 8 Music Parts

![OpenStems 8-stem controls](docs/assets/screenshots/pear-openstems-8-stems.png)

### OBS Livestreaming

![Pear OpenStems in OBS](docs/assets/screenshots/pear-openstems-obs.png)

### Send Backing Tracks To Recording Software

![Pear OpenStems sending audio to recording software](docs/assets/screenshots/pear-openstems-send-to-daw.png)

</details>

## Troubleshooting

| Problem | What to check |
| --- | --- |
| The app does not open | Make sure you are on macOS. If macOS blocks the app, allow it in `System Settings > Privacy & Security`, then launch it again from Applications. |
| You do not hear audio | Check the Mac sound output, make sure the player is not muted, turn off `Send to OBS` and `Send to DAW`, then return key to `0`. |
| Stem controls are not ready | Confirm the song is playing, wait for the OpenStems controls to update, or try another track. |
| `Send to OBS` does not work | Open OBS first, then turn `Send to OBS` off and on again. |
| `Send to DAW` does not work | Open your DAW first, load the Pear OpenStems Audio Unit plug-in on an instrument or Audio Unit Generator track, keep the track audible, then turn `Send to DAW` off and on again. |

## Project Note

Pear OpenStems is built on the official open-source [Pear Desktop](https://github.com/pear-devs/pear-desktop) project. This project is not affiliated with, authorized by, endorsed by, or officially connected with Google, YouTube, or YouTube Music. Trademarks belong to their respective owners.

---

## Chinese Guide

<details>
<summary><strong>Pear OpenStems 中文说明</strong></summary>

Pear OpenStems 基于官方开源 [Pear Desktop](https://github.com/pear-devs/pear-desktop) 项目开发。Pear Desktop 是播放器基础，OpenStems 是新增的音乐控制体验。

### 它能做什么

- 播放中升降调。
- 降低或静音主唱。
- 调整人声、鼓、贝斯、钢琴和其他声部。
- 把当前混音送进 OBS。
- 通过 Pear OpenStems Audio Unit 插件把伴奏送进 DAW。

### 适合这些场景

- 普通直播：把音乐直接送进 OBS。
- 唱歌直播：把伴奏送进 DAW，和人声、效果、监听一起混音。
- K歌、翻唱、练唱和快速升降调。
- 乐器练习、学编曲和现场伴奏。

### 分轨模式

| 模式 | 可控制的音乐部分 | 适合什么 |
| --- | --- | --- |
| Realtime | Vocals、Bass、Drums、Piano、Others | 边播边调、直播、快速练习 |
| Karaoke HQ | Lead Vocal、Accompaniment | K歌、翻唱、降低主唱 |
| 8 Stems HQ | Lead Vocal、Backing Vocal、Guitar、Bass、Drums、Piano、Wind、Others | 学编曲、乐器练习、现场伴奏混音 |

### 在 OBS 中使用

打开 OBS，在 Pear OpenStems 中播放音乐并调整好分轨，然后点击 `Send to OBS`。

### 在 DAW 中使用

1. 打开你的 DAW 或录音编曲软件。
2. 新建一条立体声 instrument 音轨、Software Instrument 音轨，或 Audio Unit Generator 音轨。
3. 在这条音轨上加载 `Pear OpenStems` Audio Unit 插件。
4. 保持音轨可听，并把输出送到主输出、监听总线、人声混音链路或录音链路。
5. 在 Pear OpenStems 中播放音乐。
6. 点击 `Send to DAW`。

不同 macOS DAW 的 Audio Unit 音轨名称可能不同。关键点相同：新建 instrument 类型的 Audio Unit 音轨，加载 Pear OpenStems，保持音轨可听，然后从播放器发送音乐。

### 安装

1. 从 [GitHub Releases](https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases) 下载 macOS `.pkg`。
2. 打开安装包并完成安装。
3. 从 Applications 启动 Pear OpenStems。

如果 macOS 首次启动前要求确认，请打开 `系统设置 > 隐私与安全性`，允许 Pear OpenStems。

</details>
