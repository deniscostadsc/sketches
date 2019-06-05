const pubsub = require("../common/pubsub")
const assert = require('assert');

describe('Common', () => {
  afterEach(() => {
    pubsub.clean();
  })

  describe('Pubsub', () => {
    describe('subscribe', () => {
      it('must be able to subscribe', () => {
        assert.equal(pubsub.countNotifications(), 0)
        pubsub.subscribe('subscribe', () => {})
        assert.equal(pubsub.countNotifications(), 1)
        assert.equal(pubsub.countSubscribers('subscribe'), 1)
      });

      it('must be able to subscribe many', () => {
        assert.equal(pubsub.countNotifications(), 0)
        pubsub.subscribe('subscribe', () => {})
        pubsub.subscribe('subscribe', () => {})
        pubsub.subscribe('subscribe', () => {})
        assert.equal(pubsub.countNotifications(), 1)
        assert.equal(pubsub.countSubscribers('subscribe'), 3)
      });
    });

    describe('publish', () => {
      it('must be able to notify', () => {
        let num = 0
        pubsub.subscribe('increment', () => {num++})
        pubsub.publish('increment')
        assert.equal(num, 1)
        pubsub.publish('increment')
        assert.equal(num, 2)
      });

      it('must throw error when notification does not exist', () => {
        pubsub.subscribe('existing', () => {})
        assert.throws(
          () => {
            pubsub.publish('non-existing')
          },
          {
            name: 'Error',
            message: 'You must specify a existing notification'
          }
        )
      });
    });

    describe('clean notification', () => {
      it('must be able to clean specific notification subscribers', () => {
        pubsub.subscribe('specific clean', () => {})
        pubsub.subscribe('non-specific clean', () => {})
        assert.equal(pubsub.countSubscribers('specific clean'), 1)
        assert.equal(pubsub.countSubscribers('non-specific clean'), 1)
        pubsub.clean('specific clean')
        assert.equal(pubsub.countSubscribers('specific clean'), 0)
        assert.equal(pubsub.countSubscribers('non-specific clean'), 1)
      });

      it('must be able to clean all subscribers', () => {
        pubsub.subscribe('specific clean', () => {})
        pubsub.subscribe('full clean', () => {})
        pubsub.subscribe('non-deterministic clean', () => {})
        assert.equal(pubsub.countNotifications(), 3)
        assert.equal(pubsub.countSubscribers('specific clean'), 1)
        assert.equal(pubsub.countSubscribers('full clean'), 1)
        assert.equal(pubsub.countSubscribers('non-deterministic clean'), 1)
        pubsub.clean()
        assert.equal(pubsub.countNotifications(), 0)
      });

      it('must throw error when clean non-existing notification', () => {
        pubsub.subscribe('existing', () => {})
        assert.throws(
          () => {
            pubsub.clean('non-existing')
          },
          {
            name: 'Error',
            message: 'You must specify a existing notification'
          }
        )
      });
    });
  });
});

