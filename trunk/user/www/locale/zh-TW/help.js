var help = {

  // Wi-Fi
  "wifi_basic": "設定無線網路的 SSID、密碼、頻道與安全性。若訊號不穩，可嘗試更換頻道或降低頻寬。",
  "wifi_wps": "WPS 可讓裝置快速連線至無線網路。請確認裝置支援 WPS 功能。",
  "wifi_mac": "MAC 過濾可限制哪些裝置能連線至無線網路。請謹慎設定避免阻擋合法裝置。",

  // WAN / LAN
  "wan_basic": "設定 WAN 連線方式，例如自動取得 IP、PPPoE 或固定 IP。若無法上網，請確認 ISP 提供的帳號資訊。",
  "lan_basic": "設定區域網路的 IP、子網路遮罩與 DHCP 伺服器範圍。",
  "dhcp_basic": "DHCP 伺服器可自動分配 IP 給區域網路中的裝置。",
  "dns_basic": "DNS 設定可指定解析網域名稱的伺服器。若網路速度慢，可嘗試更換 DNS。",

  // 防火牆
  "fw_port_forward": "連接埠轉發可讓外部存取內部設備，例如 NAS 或遊戲伺服器。",
  "fw_dmz": "DMZ 主機會完全暴露於外部網路，僅適用於特殊用途。請務必謹慎使用。",
  "fw_mac_filter": "MAC 過濾可限制裝置存取網路。請確認 MAC 位址填寫正確。",

  // USB
  "usb_storage": "USB 儲存裝置可用於檔案分享。請確認裝置已正確掛載。",
  "usb_samba": "Samba 分享可讓區域網路中的裝置存取 USB 儲存裝置。",
  "usb_ftp": "FTP 伺服器可讓你透過 FTP 存取 USB 裝置。",
  "usb_printer": "USB 印表機伺服器可讓區域網路中的裝置共享印表機。",

  // VPN
  "vpn_pptp": "PPTP VPN 可建立基本的遠端連線。請依照服務提供者的設定填寫。",
  "vpn_l2tp": "L2TP VPN 提供更安全的連線方式。請確認帳號與伺服器資訊正確。",
  "vpn_ovpn": "OpenVPN 客戶端可匯入 .ovpn 設定檔以建立安全連線。",

  // QoS
  "qos_basic": "QoS 可分配不同裝置或服務的網路優先權，避免網路壅塞。",
  "qos_rules": "流量規則可限制特定服務的頻寬或優先權。",
  "qos_devices": "裝置優先權可讓你指定哪些設備在壅塞時優先使用網路。",

  // 進階設定
  "nat_basic": "NAT 可讓多個裝置共用同一個外部 IP。一般情況下建議保持啟用。",
  "ipv6_basic": "IPv6 設定可讓路由器支援新一代網路協定。請依照 ISP 指示設定。",
  "vlan_basic": "VLAN 可將網路分割成不同區段，適用於進階網路架構。",
  "mtu_basic": "MTU 決定封包大小。若遇到連線問題，可嘗試調整 MTU 值。",

  // 診斷工具
  "diag_ping": "Ping 可測試與目標主機的連線是否正常。",
  "diag_trace": "路由追蹤可顯示封包經過的路由節點。",
  "diag_arp": "ARP 表可顯示區域網路中裝置的 IP 與 MAC 對應。",

  // 系統
  "sys_upgrade": "韌體升級可改善功能或修正問題。升級期間請勿關閉電源。",
  "sys_backup": "你可以備份目前設定，或還原到先前的設定檔。",
  "sys_reboot": "重新啟動路由器可解決部分網路問題。"
};
