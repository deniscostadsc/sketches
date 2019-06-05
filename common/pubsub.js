/* eslint no-unused-vars: 0 */
class Pubsub {
  constructor () {
    this.subscribers = {}
  }

  publish (notification) {
    this.subscribers[notification].forEach(subscriber => {
      subscriber()
    })
  }

  subscribe (notification, fn) {
    if (this.subscribers[notification]) {
      this.subscribers[notification].push(fn)
    } else {
      this.subscribers[notification] = [fn]
    }
  }

  countNotifications () {
    let count = 0
    for (var property in this.subscribers) {
      if (this.subscribers.hasOwnProperty(property)) {
        count++
      }
    }
    return count
  }

  countSubscribers (notification) {
    return this.subscribers[notification].length
  }

  clean (notification) {
    if (notification && this.subscribers[notification]) {
      this.subscribers[notification] = []
    } else if (!notification) {
      this.subscribers = {}
    } else {
      throw new Error('You must specify a existing notification')
    }
  }
}

try {
  module.exports = exports = new Pubsub()
} catch (e) {
  const pubsub = new Pubsub()
}
