# Pear OpenStems

<div align="center">

<h3>Turn a music player into a live backing track, stem mixer, karaoke tool, and performance source.</h3>

<p>
Built on the official open-source
<a href="https://github.com/pear-devs/pear-desktop">Pear Desktop</a> project.
Pear Desktop is the player foundation. OpenStems is the added music-control experience.
</p>

<p>
<a href="https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases"><strong>Download macOS .pkg</strong></a>
 |
<a href="#where-it-helps">Where it helps</a>
 |
<a href="#three-ways-to-shape-the-music">Stem modes</a>
 |
<a href="#use-it-in-obs">OBS</a>
 |
<a href="#use-it-in-your-daw">DAW / Audio Unit</a>
 |
<a href="#chinese-guide">Chinese Guide</a>
</p>

</div>

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-realtime.png" alt="Pear OpenStems realtime stem controls" width="760">
</p>

## The Music Player, Unlocked

Most music players keep a song locked as one flat mix.

Pear OpenStems keeps the familiar Pear Desktop listening experience, then gives the song musical handles: key, lead vocal, accompaniment, stems, OBS output, and DAW output.

Use it when you want the track to become part of a live set, a stream, a cover, a rehearsal, or a recording session.

## Where It Helps

### Sing

Change key, lower the lead vocal, and make the track fit your voice.

### Stream

Send a controllable music mix to OBS without exporting audio files.

### Perform

Keep the band in the mix, reduce the part you want to play yourself, and rehearse with the original song.

### Create

Send the backing track into your production setup while your vocal chain, monitor mix, and effects stay in your DAW.

## Three Ways To Shape The Music

Choose the amount of control you need in the moment.

| Mode | Stems | Best for |
| --- | --- | --- |
| Realtime | Vocals, Bass, Drums, Piano, Others | Live listening, livestreaming, quick practice |
| Karaoke HQ | Lead Vocal, Accompaniment | Karaoke, covers, vocal reduction, clean backing tracks |
| 8 Stems HQ | Lead Vocal, Backing Vocal, Guitar, Bass, Drums, Piano, Wind, Others | Arrangement study, instrument practice, performance mixes |

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-karaoke.png" alt="OpenStems karaoke backing track controls" width="620">
</p>

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-8-stems.png" alt="OpenStems 8-stem controls" width="620">
</p>

## Why It Feels Better

- It starts as a real music player, not a utility panel.
- It lets you shape the song while playback continues.
- It moves fast enough for live use.
- It works for both simple OBS streams and DAW-based singing setups.

## See It In Action

### Use It In OBS

For everyday livestreaming, open OBS, play music in Pear OpenStems, shape the mix, then click `Send to OBS`.

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-send-to-obs.png" alt="Pear OpenStems sending audio to OBS" width="620">
</p>

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-obs.png" alt="Pear OpenStems in OBS" width="620">
</p>

### Use It In Your DAW

For singing livestreams and recording sessions, send the backing track into your DAW and mix it beside vocals, effects, monitoring, and recording tracks.

1. Open your DAW or recording software.
2. Create a stereo instrument track, Software Instrument track, or Audio Unit Generator track.
3. Load the `Pear OpenStems` Audio Unit plug-in on that track.
4. Keep the track audible and routed to your main output, monitor bus, vocal mix, or recording chain.
5. Play music in Pear OpenStems.
6. Click `Send to DAW`.

Different macOS DAWs name Audio Unit tracks differently. The important part is the same: create an instrument-style Audio Unit track, load Pear OpenStems, keep the track audible, then send music from the player.

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-send-to-daw.png" alt="Pear OpenStems sending audio to recording software" width="620">
</p>

<p align="center">
  <img src="docs/assets/screenshots/pear-openstems-recording-software.png" alt="Pear OpenStems in recording software" width="620">
</p>

## Install The macOS Package

1. Download the Pear OpenStems macOS `.pkg` release from [GitHub Releases](https://github.com/lindazhang1220-rgb/pear-desktop-openstems/releases).
2. Open the package and finish installation.
3. Launch Pear OpenStems from Applications.
4. Play music as usual.
5. Open the OpenStems control center when you want key change, vocal control, stem balance, backing tracks, OBS output, or DAW output.

If macOS asks for confirmation before first launch, open `System Settings > Privacy & Security` and allow Pear OpenStems.

## Quick Starts

### Change Key

Play a song, move the key control, then return to `0` when you want the original key.

### Make A Karaoke Or Cover Backing Track

Choose Karaoke HQ, lower or mute the lead vocal, then sing, rehearse, record, or stream.

### Practice An Instrument

Choose Realtime or 8 Stems HQ, lower the part you want to play yourself, and keep the rest of the band in the mix.

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

### 被解锁的音乐播放器

普通播放器把一首歌当成一整块声音。Pear OpenStems 保留播放器体验，同时让歌曲可以被你拿来唱、演、直播、练习和创作。

### 适合这些场景

- 普通直播：把当前音乐混音送进 OBS。
- 唱歌直播：把伴奏送进 DAW，和人声、效果、监听一起混。
- K歌和翻唱：降低或静音主唱，快速得到伴奏。
- 乐器练习：保留乐队伴奏，降低你想自己演奏的声部。
- 学歌和听编曲：听清主唱、和声、鼓、贝斯、钢琴、吉他和其他声部。

### 三种分轨模式

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
