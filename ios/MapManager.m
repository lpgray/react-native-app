//
//  RCTMapManager.m
//  RCTScorer
//
//  Created by zhangyang on 15/12/9.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import "RCTViewManager.h"

@interface MapManager : RCTViewManager
@end

@implementation MapManager

RCT_EXPORT_MODULE()

-(UIView *)view
{
  return [[MKMapView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

@end