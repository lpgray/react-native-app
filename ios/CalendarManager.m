//
//  CalendarManager.m
//  RCTScorer
//
//  Created by zhangyang on 15/12/9.
//  Copyright © 2015年 Facebook. All rights reserved.
//
#import "CalendarManager.h"
@implementation CalendarManager

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}
@end