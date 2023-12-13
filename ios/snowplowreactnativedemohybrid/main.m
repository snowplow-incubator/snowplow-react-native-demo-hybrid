#import <UIKit/UIKit.h>

#import "AppDelegate.h"

@import SnowplowTracker;

int main(int argc, char * argv[]) {
  @autoreleasepool {
    [NSTimer scheduledTimerWithTimeInterval:5 repeats:true block:^(NSTimer * _Nonnull timer) {
      id<SPTrackerController> tracker = [SPSnowplow defaultTracker];
      if (tracker != nil) {
        SPStructured *structured = [[SPStructured alloc] initWithCategory:@"native" action:@"event"];
        [tracker track:structured];
      }
    }];
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}

