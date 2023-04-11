
export class Platform {

  /**
   * 判断是否是在移动端，如果是在移动端则返回True，否则返回False
   * @returns {boolean}
   */
  static isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  }
}