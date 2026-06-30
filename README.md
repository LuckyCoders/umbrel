> [!IMPORTANT]
> **LuckyCoders fork — not official umbrelOS**
>
> This repository is a community fork of [getumbrel/umbrel](https://github.com/getumbrel/umbrel). It is maintained in parallel with upstream while Pi external-storage fixes are not yet merged upstream. **Do not use Settings → Software Update** on a device running this build — that installs the official release and removes these changes.

<table>
<tr>
<td width="50%" valign="top">

### What we fixed (Raspberry Pi)

- **No auto-format at boot** — a USB drive is never wiped when umbrelOS boots from SD
- **Umbrel stays on SD** — apps and data remain on the SD card even if an empty USB drive is attached
- **External USB in Files** — drives mount under **Files → External** (ext4, exFAT, NTFS)
- **Network WebDAV** — connect WebDAV servers (NAS, Nextcloud) via **Files → Network** using rclone
- **Power safety** — external drives are unmounted on undervoltage or USB I/O errors
- **UAS blacklist** — improved USB stability on Raspberry Pi 4

</td>
<td width="50%" valign="top">

### How this differs from upstream

| Official umbrelOS | This fork |
| --- | --- |
| External storage disabled on Pi | Enabled in Files |
| Boot script may format a blank USB | Boot script never formats USB |
| Pi USB treated as unsupported in UI | Server-side support via API |

</td>
</tr>
</table>

### Install this fork on an existing Raspberry Pi 4

**Prerequisite:** umbrelOS 1.7.x already running from SD (`bootFlow: rpi-tryboot`). Apps and data on the `data` partition are preserved.

**1. Build or download `umbrelos-pi.update`**

- **GitHub Actions:** [Build umbrelOS Pi](https://github.com/LuckyCoders/umbrel/actions/workflows/build-pi.yml) → **Run workflow** → download the artifact
- **Or locally:** `cd packages/os && npm run build:pi` → `build/umbrelos-pi.update`

**2. Copy to your Pi and install**

```bash
scp umbrelos-pi.update umbrel@<pi-ip>:/tmp/

ssh umbrel@<pi-ip>
sudo rugix-ctrl update install \
  --reboot set \
  --insecure-skip-bundle-verification \
  /tmp/umbrelos-pi.update
```

**3. After reboot, if everything works**

```bash
sudo rugix-ctrl system commit
```

**4. Verify**

```bash
grep "Umbrel data stays on the SD card" /opt/umbrel-external-storage/umbrel-external-storage
# Plug in a USB drive — it should appear in Files → External within ~10 seconds
```

> [!TIP]
> Use a **powered USB hub** for hard drives on Pi 4. For future updates from this fork, repeat the `rugix-ctrl update install` steps with a new `umbrelos-pi.update` artifact — not the in-app updater.

---

[![umbrelOS](https://github.com/user-attachments/assets/cabf8af7-51ce-45df-ad3a-a664cc91c610)](https://umbrel.com/umbrelos)

<p align="center">
  <h1 align="center">umbrelOS</h1>
  <p align="center">
    A beautiful home server OS for self-hosting
    <br />
    <a href="https://umbrel.com"><strong>umbrel.com »</strong></a>
    <br />
    <br />
       Get an <a href="https://umbrel.com/umbrel-pro">Umbrel Pro</a> or <a href="https://umbrel.com/umbrel-home">Umbrel Home</a> for the full experience, or install umbrelOS on a <a href="https://github.com/getumbrel/umbrel/wiki/Install-umbrelOS-on-a-Raspberry-Pi-5">Raspberry Pi 5</a> or <a href="https://github.com/getumbrel/umbrel/wiki/Install-umbrelOS-on-x86-systems">any x86 system</a> for free.
    <br />
    <br />
    <a href="https://x.com/umbrel">
      <img src="https://img.shields.io/twitter/follow/umbrel?style=social" />
    </a>
    <a href="https://discord.gg/efNtFzqtdx">
      <img src="https://img.shields.io/discord/936694604231766046?logo=discord&logoColor=5351FB&label=Discord&labelColor=white&color=5351FB&cacheSeconds=60">
    </a>
    <a href="https://reddit.com/r/getumbrel">
      <img src="https://img.shields.io/reddit/subreddit-subscribers/getumbrel?style=social">
    </a>
    <a href="https://community.umbrel.com">
      <img src="https://img.shields.io/discourse/users?server=https%3A%2F%2Fcommunity.umbrel.com&style=flat&label=Community%20Forum&color=5351FB&cacheSeconds=60">
    </a>
  </p>
</p>

<br />

<p align="center">
At Umbrel, we believe that everyone should be able to enjoy the convenience and benefits of the cloud, without giving up ownership and control of their data.
</p>

<p align="center">
To achieve our vision, we're building a new kind of a home server OS. Instead of paying ransoms for storing your data on someone else's computer while they auction it off to advertisers — you can now easily spin up a server and self-host your data and services at home.
</p>

<p align="center">
Just like the cloud, but one that you own and control.
</p>

<br />

## Installing umbrelOS

umbrelOS is designed for the [Umbrel Pro](https://umbrel.com/umbrel-pro) and [Umbrel Home](https://umbrel.com/umbrel-home), where it includes first-class support for all features. On other devices (like Raspberry Pi or x86 systems), it’s freely available with core functionality, but support and feature availability are best-effort due to hardware differences.

For a detailed feature breakdown, see our [comparison guide](https://github.com/getumbrel/umbrel/wiki/umbrelOS-on-Umbrel-Home-vs.-DIY).

### Installation guides
- [Install umbrelOS on a Raspberry Pi 5](https://github.com/getumbrel/umbrel/wiki/Install-umbrelOS-on-a-Raspberry-Pi-5)
- [Install umbrelOS on any x86 system](https://github.com/getumbrel/umbrel/wiki/Install-umbrelOS-on-x86-Systems)
- [Install umbrelOS in a VM](https://github.com/getumbrel/umbrel/wiki/Install-umbrelOS-on-a-Linux-VM)

[![umbrelOS use cases](https://github.com/user-attachments/assets/284feee7-15a1-48f2-a694-c968f1cc702f)](https://umbrel.com/umbrelos)
[![Umbrel App Store](https://github.com/user-attachments/assets/3d7846c7-d896-48f5-8a30-3578554702fa)](https://apps.umbrel.com)
[![Files on umbrelOS](https://github.com/user-attachments/assets/6c501256-47a0-4ce1-89ad-4ba02f4c9f2d)](https://umbrel.com/umbrelos)
[![umbrelOS Features](https://github.com/user-attachments/assets/6828da74-2b64-4b56-a7b7-5db603d023c8)](https://umbrel.com/umbrelos)
[![Backups in umbrelOS](https://github.com/user-attachments/assets/39778824-ed18-4f6f-a865-1d77bbfce833)](https://umbrel.com/umbrelos)
[![External Storage & NAS in umbrelOS](https://github.com/user-attachments/assets/4841c2dc-4ba4-4d47-bf0a-0e342bf60166)](https://umbrel.com/umbrelos)

## Building apps for umbrelOS

If you're interested in building an app for umbrelOS or packaging an existing one, please refer to the [Umbrel App Framework documentation](https://github.com/getumbrel/umbrel-apps/blob/master/README.md).

## License

umbrelOS is licensed under the PolyForm Noncommercial 1.0.0 license. TL;DR — You're free to use, fork, modify, and redistribute Umbrel for personal and nonprofit use under the same license. If you're interested in using umbrelOS for commercial purposes, such as selling plug-and-play home servers with umbrelOS, etc — please reach out to us at partner@umbrel.com.

[![License](https://img.shields.io/badge/license-PolyForm%20Noncommercial%201.0.0-%235351FB)](https://github.com/getumbrel/umbrel/blob/master/LICENSE.md)

[umbrel.com](https://umbrel.com)
