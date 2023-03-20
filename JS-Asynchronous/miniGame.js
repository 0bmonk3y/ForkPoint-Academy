    const box = document.getElementById('box');
    const topLine = document.getElementById('top-line');
    const leftLine = document.getElementById('left-line');
    const rightLine = document.getElementById('right-line');

    function handleCustomEvent(event) {
      console.log('Box reached line:', event.detail.line);
    }

    topLine.addEventListener('boxReached', handleCustomEvent);
    leftLine.addEventListener('boxReached', handleCustomEvent);
    rightLine.addEventListener('boxReached', handleCustomEvent);

    function moveBox(direction) {
      const boxStyle = window.getComputedStyle(box);
      let top = parseInt(boxStyle.getPropertyValue('top'));
      let left = parseInt(boxStyle.getPropertyValue('left'));

      switch (direction) {
        case 'up':
          top -= 10;
          break;
        case 'down':
          top += 10;
          break;
        case 'left':
          left -= 10;
          break;
        case 'right':
          left += 10;
          break;
      }

      box.style.top = top + 'px';
      box.style.left = left + 'px';

      const boxRect = box.getBoundingClientRect();
      const topLineRect = topLine.getBoundingClientRect();
      const leftLineRect = leftLine.getBoundingClientRect();
      const rightLineRect = rightLine.getBoundingClientRect();

      if (boxRect.top <= topLineRect.bottom) {
        const event = new CustomEvent('boxReached', { detail: { line: 'top' } });
        topLine.dispatchEvent(event);
      }

      if (boxRect.left <= leftLineRect.right) {
        const event = new CustomEvent('boxReached', { detail: { line: 'left' } });
        leftLine.dispatchEvent(event);
      }

      if (boxRect.right >= rightLineRect.left) {
        const event = new CustomEvent('boxReached', { detail: { line: 'right' } });
        rightLine.dispatchEvent(event);
      }
    }

 //   document.getElementById('