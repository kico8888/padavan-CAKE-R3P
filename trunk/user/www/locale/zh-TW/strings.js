var lang = {

  // 基本介面
  "apply": "套用",
  "save": "儲存設定",
  "cancel": "取消",
  "ok": "確定",
  "close": "關閉",
  "enable": "啟用",
  "disable": "停用",
  "delete": "刪除",
  "edit": "編輯",
  "refresh": "重新整理",
  "loading": "載入中…",

  // 系統資訊
  "system_info": "系統資訊",
  "firmware_version": "韌體版本",
  "kernel_version": "核心版本",
  "uptime": "運作時間",
  "cpu_load": "CPU 使用率",
  "memory_usage": "記憶體使用量",

  // 網路設定
  "network_settings": "網路設定",
  "wan_settings": "WAN 設定",
  "lan_settings": "LAN 設定",
  "wifi_settings": "Wi‑Fi 設定",
  "wifi_24g": "2.4GHz 無線網路",
  "wifi_5g": "5GHz 無線網路",
  "ssid": "SSID 名稱",
  "password": "密碼",
  "channel": "頻道",
  "bandwidth": "頻寬",
  "security": "安全性",

  // DHCP / DNS
  "dhcp_settings": "DHCP 設定",
  "dns_settings": "DNS 設定",
  "dhcp_client_list": "DHCP 客戶端列表",

  // 防火牆
  "firewall": "防火牆",
  "port_forwarding": "連接埠轉發",
  "dmz": "DMZ 主機",
  "mac_filter": "MAC 過濾",

  // 系統管理
  "system_management": "系統管理",
  "reboot": "重新啟動",
  "restore": "還原設定",
  "backup": "備份設定",
  "upgrade": "韌體升級",

  // 其他
  "usb_settings": "USB 設定",
  "vpn_settings": "VPN 設定",
  "qos_settings": "QoS 流量管理",
  "log_viewer": "系統日誌",
  "time_settings": "時間設定",
  "timezone": "時區",
  "ntp_server": "NTP 時間伺服器",

  /* ============================
     以下為你要求的「完整擴充」
     QoS / USB / VPN / 防火牆 / 進階設定 / 診斷工具
     ============================ */

  // QoS
  "qos_enable": "啟用 QoS 流量管理",
  "qos_mode": "QoS 模式",
  "qos_rule_list": "流量規則列表",
  "qos_priority": "優先權",
  "qos_bandwidth_up": "上行頻寬限制",
  "qos_bandwidth_down": "下行頻寬限制",
  "qos_device": "裝置",
  "qos_service": "服務類型",
  "qos_apply_tip": "QoS 可改善網路壅塞時的使用體驗。請依需求設定優先權。",

  // USB
  "usb_storage": "USB 儲存裝置",
  "usb_samba": "Samba 檔案分享",
  "usb_ftp": "FTP 伺服器",
  "usb_printer": "USB 印表機伺服器",
  "usb_mount": "掛載點",
  "usb_fs_type": "檔案系統類型",
  "usb_samba_enable": "啟用 Samba 分享",
  "usb_ftp_enable": "啟用 FTP 分享",
  "usb_printer_enable": "啟用印表機伺服器",
  "usb_access_user": "存取帳號",
  "usb_access_pass": "存取密碼",
  "usb_tip": "USB 功能可用於檔案分享或印表機共享。請確認裝置已正確插入。",

  // VPN
  "vpn_pptp": "PPTP VPN",
  "vpn_l2tp": "L2TP VPN",
  "vpn_ovpn": "OpenVPN 客戶端",
  "vpn_server": "伺服器地址",
  "vpn_username": "使用者名稱",
  "vpn_password": "密碼",
  "vpn_mppe": "MPPE 加密",
  "vpn_enable": "啟用 VPN",
  "vpn_status": "VPN 連線狀態",
  "vpn_tip": "VPN 可建立安全的遠端連線。請依照服務提供者的設定填寫。",

  // 防火牆
  "fw_port_forward": "連接埠轉發",
  "fw_external_port": "外部連接埠",
  "fw_internal_port": "內部連接埠",
  "fw_internal_ip": "內部 IP",
  "fw_protocol": "協定",
  "fw_dmz": "DMZ 主機",
  "fw_dmz_enable": "啟用 DMZ",
  "fw_mac_filter": "MAC 過濾",
  "fw_mac_allow": "允許清單",
  "fw_mac_deny": "拒絕清單",
  "fw_tip": "防火牆可保護路由器免於外部攻擊。請謹慎設定 DMZ 與連接埠轉發。",

  // 進階設定
  "adv_nat": "NAT 設定",
  "adv_nat_enable": "啟用 NAT",
  "adv_static_route": "靜態路由",
  "adv_ipv6": "IPv6 設定",
  "adv_ipv6_enable": "啟用 IPv6",
  "adv_mtu": "MTU 值",
  "adv_vlan": "VLAN 設定",
  "adv_tip": "進階設定適合熟悉網路架構的使用者。請謹慎修改。",

  // 診斷工具
  "diag_tools": "診斷工具",
  "diag_ping": "Ping 測試",
  "diag_traceroute": "路由追蹤",
  "diag_arp": "ARP 表",
  "diag_target": "目標地址",
  "diag_start": "開始測試",
  "diag_result": "測試結果",
  "diag_tip": "診斷工具可協助確認網路連線是否正常。"
    // 無線高級設定（2.4G / 5G）
  "wifi_txpower": "發射功率",
  "wifi_beacon": "Beacon 間隔",
  "wifi_rts": "RTS 門檻",
  "wifi_frag": "Fragment 門檻",
  "wifi_dtim": "DTIM 間隔",
  "wifi_wmm": "WMM QoS",
  "wifi_isolation": "AP 隔離",
  "wifi_hide_ssid": "隱藏 SSID",
  "wifi_country": "國家/地區代碼",
  "wifi_ampdu": "AMPDU 聚合",
  "wifi_amsdu": "AMSDU 聚合",
  "wifi_ldpc": "LDPC 編碼",
  "wifi_stbc": "STBC 傳輸",
  "wifi_mu_mimo": "MU‑MIMO",

  // Traffic Monitor（流量監控）
  "tm_title": "流量監控",
  "tm_rx": "下載流量",
  "tm_tx": "上傳流量",
  "tm_total": "總流量",
  "tm_speed": "即時速度",
  "tm_reset": "重置統計",
  "tm_tip": "流量監控可顯示每個裝置的即時與累積流量。",

  // NAT / Conntrack（連線追蹤）
  "nat_table": "NAT 表",
  "conntrack": "連線追蹤",
  "conntrack_count": "目前連線數",
  "conntrack_max": "最大連線數",
  "conntrack_refresh": "重新整理連線表",
  "conntrack_tip": "連線追蹤可顯示目前所有 NAT 連線狀態。",

  // ARP / NDP（IPv4 / IPv6 裝置表）
  "arp_table": "ARP 表（IPv4）",
  "ndp_table": "NDP 表（IPv6）",
  "arp_ip": "IP 位址",
  "arp_mac": "MAC 位址",
  "arp_iface": "介面",
  "arp_tip": "ARP 表顯示區域網路中裝置的 IPv4 與 MAC 對應。",
  "ndp_tip": "NDP 表顯示 IPv6 裝置的鄰居資訊。",

  // OpenVPN 進階設定
  "ovpn_import": "匯入 .ovpn 設定檔",
  "ovpn_cipher": "加密方式",
  "ovpn_auth": "驗證方式",
  "ovpn_tls": "TLS 設定",
  "ovpn_ca": "CA 憑證",
  "ovpn_cert": "用戶端憑證",
  "ovpn_key": "用戶端金鑰",
  "ovpn_status": "連線狀態",
  "ovpn_log": "OpenVPN 日誌",
  "ovpn_tip": "OpenVPN 支援匯入設定檔與手動設定憑證。",

  // USB 掛載資訊（Mount Info）
  "usb_mount_info": "掛載資訊",
  "usb_mount_point": "掛載點",
  "usb_device": "裝置名稱",
  "usb_fs": "檔案系統",
  "usb_size": "容量",
  "usb_used": "已使用",
  "usb_free": "可用空間",
  "usb_mount_tip": "顯示 USB 儲存裝置的掛載狀態與容量資訊。",

  // 系統 Debug / 工具頁面
  "debug_tools": "系統工具",
  "debug_iperf": "iPerf 測速",
  "debug_nslookup": "DNS 查詢（nslookup）",
  "debug_tcpdump": "封包擷取（tcpdump）",
  "debug_proc": "系統狀態（/proc）",
  "debug_sys": "系統參數（/sys）",
  "debug_cmd": "執行指令",
  "debug_output": "輸出結果",
  "debug_tip": "系統工具可用於診斷網路與系統問題。",

  // IPv6 進階設定
  "ipv6_ra": "Router Advertisement (RA)",
  "ipv6_dhcp6": "DHCPv6 設定",
  "ipv6_prefix": "前綴位址",
  "ipv6_pd": "Prefix Delegation",
  "ipv6_ll": "Link‑Local 位址",
  "ipv6_global": "Global IPv6 位址",
  "ipv6_tip": "IPv6 進階設定適用於支援 IPv6 的 ISP 或進階網路架構。",

  // 系統狀態（CPU / Memory / Process）
  "sys_cpu": "CPU 狀態",
  "sys_mem": "記憶體狀態",
  "sys_process": "行程列表",
  "sys_loadavg": "系統負載",
  "sys_top": "行程監控",
  "sys_tip": "系統狀態頁面可顯示 CPU、記憶體與行程資訊。"
};
